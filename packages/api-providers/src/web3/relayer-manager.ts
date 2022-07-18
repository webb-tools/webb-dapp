// Copyright 2022 @webb-tools/
// SPDX-License-Identifier: Apache-2.0

import { MerkleTree, Note, parseTypedChainId } from '@webb-tools/sdk-core';
import { ethers } from 'ethers';

import {
  ContractName,
  OptionalActiveRelayer,
  OptionalRelayer,
  RelayerQuery,
  shuffleRelayers,
  WebbRelayer,
} from '../abstracts';
import { WebbRelayerManager } from '../abstracts/relayer/webb-relayer-manager';
import {
  BridgeStorage,
  getFixedAnchorAddressForBridge,
  Storage,
  VAnchorContract,
  webbCurrencyIdFromString,
  WebbError,
  WebbErrorCodes,
} from '..';

export class Web3RelayerManager extends WebbRelayerManager {
  async mapRelayerIntoActive(relayer: OptionalRelayer, typedChainId: number): Promise<OptionalActiveRelayer> {
    if (!relayer) {
      return null;
    }

    return WebbRelayer.intoActiveWebRelayer(
      relayer,
      {
        basedOn: 'evm',
        typedChainId,
      },
      // Define the function for retrieving fee information for the relayer
      async (note: string) => {
        const depositNote = await Note.deserialize(note);
        const evmNote = depositNote.note;
        const contractAddress = await getFixedAnchorAddressForBridge(
          webbCurrencyIdFromString(evmNote.tokenSymbol),
          typedChainId,
          Number(evmNote.amount),
          this.config.bridgeByAsset
        );

        if (!contractAddress) {
          throw new Error('Unsupported configuration for bridge');
        }

        // Given the note, iterate over the relayer's supported contracts and find the corresponding configuration
        // for the contract.
        const supportedContract = relayer.capabilities.supportedChains.evm
          .get(typedChainId)
          ?.contracts.find(({ address, size }) => {
            // Match on the relayer configuration as well as note
            return address.toLowerCase() === contractAddress.toLowerCase() && size === Number(evmNote.amount);
          });

        // The user somehow selected a relayer which does not support the mixer.
        // This should not be possible as only supported mixers should be selectable in the UI.
        if (!supportedContract) {
          throw WebbError.from(WebbErrorCodes.RelayerUnsupportedMixer);
        }

        const principleBig = ethers.utils.parseUnits(supportedContract.size.toString(), evmNote.denomination);
        const withdrawFeeMill = supportedContract.withdrawFeePercentage * 1000000;

        const withdrawFeeMillBig = ethers.BigNumber.from(withdrawFeeMill);
        const feeBigMill = principleBig.mul(withdrawFeeMillBig);

        const feeBig = feeBigMill.div(ethers.BigNumber.from(1000000));

        return {
          totalFees: feeBig.toString(),
          withdrawFeePercentage: supportedContract.withdrawFeePercentage,
        };
      }
    );
  }

  /*
   *  get a list of the suitable relayers for a given query
   *  the list is randomized
   *  Accepts a 'RelayerQuery' object with optional, indexible fields.
   **/
  getRelayers(query: RelayerQuery): WebbRelayer[] {
    const { baseOn, bridgeSupport, chainId, contractAddress, ipService } = query;
    const relayers = this.relayers.filter((relayer) => {
      const capabilities = relayer.capabilities;

      if (ipService) {
        if (!capabilities.hasIpService) {
          return false;
        }
      }

      if (contractAddress && baseOn && chainId) {
        if (baseOn === 'evm') {
          return Boolean(
            capabilities.supportedChains[baseOn]
              .get(chainId)
              ?.contracts?.find(
                (contract) => contract.address === contractAddress.toLowerCase() && contract.eventsWatcher.enabled
              )
          );
        }
      }

      if (query.contract && baseOn === 'evm' && chainId !== undefined) {
        console.log(`chainId: ${chainId}`);
        console.log(`evm map`, capabilities.supportedChains);
        const cap = capabilities.supportedChains['evm'].get(chainId);
        console.log(`Query using the query.contract field ${query.contract}`, cap);
        const relayerIndex =
          capabilities.supportedChains['evm']
            .get(chainId)
            ?.contracts.findIndex((contract) => contract.contract === query.contract) ?? -1;
        return relayerIndex > -1;
      }

      if (bridgeSupport && baseOn && chainId) {
        if (baseOn === 'evm') {
          const anchorAddress = getFixedAnchorAddressForBridge(
            webbCurrencyIdFromString(bridgeSupport.tokenSymbol),
            chainId,
            bridgeSupport.amount,
            this.config.bridgeByAsset
          );

          if (anchorAddress) {
            return Boolean(
              capabilities.supportedChains[baseOn]
                .get(chainId)
                ?.contracts?.find((contract) => contract.address === anchorAddress.toLowerCase())
            );
          } else {
            return false;
          }
        }
      }

      if (baseOn && chainId) {
        return Boolean(capabilities.supportedChains[baseOn].get(chainId));
      }

      if (baseOn && !chainId) {
        console.log(capabilities.supportedChains, baseOn);

        return capabilities.supportedChains[baseOn].size > 0;
      }

      return true;
    });

    shuffleRelayers(relayers);

    return relayers;
  }

  async getRelayersByNote(evmNote: Note) {
    const chainTypeId = Number(evmNote.note.targetChainId);
    let contract: ContractName;
    switch (evmNote.note.protocol) {
      case 'mixer':
        contract = 'Anchor';
        break;
      case 'anchor':
        contract = 'Anchor';
        break;
      case 'vanchor':
        contract = 'VAnchor';
    }

    return this.getRelayers({
      baseOn: 'evm',
      bridgeSupport: {
        amount: Number(evmNote.note.amount),
        tokenSymbol: evmNote.note.tokenSymbol,
      },
      chainId: chainTypeId,
      contract,
    });
  }

  async getRelayersByChainAndAddress(typedChainId: number, address: string) {
    const parsedChainIdType = parseTypedChainId(typedChainId);
    return this.getRelayers({
      baseOn: 'evm',
      chainId: parsedChainIdType.chainId,
      contractAddress: address,
    });
  }

  /**
   * This routine queries the passed relayers for the leaves of an anchor instance on an evm chain.
   * It validates the leaves with on-chain data, and saves to the storage once validated.
   * An array of leaves is returned if validated, otherwise null is returned.
   * @param relayers - A list of relayers
   * @param contract - A VAnchorContract wrapper for EVM chains.
   * @param storage - A storage to save the fetched leaves.
   */
  async fetchLeavesFromRelayers(
    relayers: WebbRelayer[],
    contract: VAnchorContract,
    storage: Storage<BridgeStorage>
  ): Promise<string[] | null> {
    let leaves: string[] = [];
    const sourceEvmId = await contract.getEvmId();

    // loop through the sourceRelayers to fetch leaves
    for (let i = 0; i < relayers.length; i++) {
      const relayerLeaves = await relayers[i].getLeaves(sourceEvmId, contract.inner.address);

      const validLatestLeaf = await contract.leafCreatedAtBlock(
        relayerLeaves.leaves[relayerLeaves.leaves.length - 1],
        relayerLeaves.lastQueriedBlock
      );

      // leaves from relayer somewhat validated, attempt to build the tree
      if (validLatestLeaf) {
        // Assume the destination anchor has the same levels as source anchor
        const levels = await contract.inner.levels();
        const tree = MerkleTree.createTreeWithRoot(levels, relayerLeaves.leaves, await contract.getLastRoot());

        // If we were able to build the tree, set local storage and break out of the loop
        if (tree) {
          leaves = relayerLeaves.leaves;

          await storage.set(contract.inner.address.toLowerCase(), {
            lastQueriedBlock: relayerLeaves.lastQueriedBlock,
            leaves: relayerLeaves.leaves,
          });

          return leaves;
        }
      }
    }

    return null;
  }
}
