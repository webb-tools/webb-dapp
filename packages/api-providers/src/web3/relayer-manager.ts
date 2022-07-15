// Copyright 2022 @webb-tools/
// SPDX-License-Identifier: Apache-2.0

import { Note, parseTypedChainId } from '@webb-tools/sdk-core';
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
import { InternalChainId, typedChainIdToInternalId } from '../chains';
import { getFixedAnchorAddressForBridge, webbCurrencyIdFromString, WebbError, WebbErrorCodes } from '..';

export class Web3RelayerManager extends WebbRelayerManager {
  async mapRelayerIntoActive(
    relayer: OptionalRelayer,
    internalChainId: InternalChainId
  ): Promise<OptionalActiveRelayer> {
    if (!relayer) {
      return null;
    }

    return WebbRelayer.intoActiveWebRelayer(
      relayer,
      {
        basedOn: 'evm',
        chain: internalChainId,
      },
      // Define the function for retrieving fee information for the relayer
      async (note: string) => {
        const depositNote = await Note.deserialize(note);
        const evmNote = depositNote.note;
        const internalId = typedChainIdToInternalId(parseTypedChainId(Number(depositNote.note.targetChainId)));
        const contractAddress = await getFixedAnchorAddressForBridge(
          webbCurrencyIdFromString(evmNote.tokenSymbol),
          internalId,
          Number(evmNote.amount),
          this.config.bridgeByAsset
        );

        if (!contractAddress) {
          throw new Error('Unsupported configuration for bridge');
        }

        // Given the note, iterate over the relayer's supported contracts and find the corresponding configuration
        // for the contract.
        const supportedContract = relayer.capabilities.supportedChains.evm
          .get(internalId)
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
    console.log('relayers: ', this.relayers);

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
    const internalId = typedChainIdToInternalId(parseTypedChainId(chainTypeId));
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
      chainId: internalId,
      contract,
    });
  }

  async getRelayersByChainAndAddress(chainId: InternalChainId, address: string) {
    return this.getRelayers({
      baseOn: 'evm',
      chainId: chainId,
      contractAddress: address,
    });
  }
}
