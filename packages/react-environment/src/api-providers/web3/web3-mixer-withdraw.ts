import { evmIdIntoChainId } from '@webb-dapp/apps/configs';
import { chainIdToRelayerName } from '@webb-dapp/apps/configs/relayer-config';
import { bufferToFixed } from '@webb-dapp/contracts/utils/buffer-to-fixed';
import { EvmNote } from '@webb-dapp/contracts/utils/evm-note';
import { WebbWeb3Provider } from '@webb-dapp/react-environment/api-providers/web3/webb-web3-provider';
import {
  MixerWithdraw,
  OptionalActiveRelayer,
  OptionalRelayer,
  WithdrawState,
} from '@webb-dapp/react-environment/webb-context';
import { RelayedWithdrawResult, WebbRelayer } from '@webb-dapp/react-environment/webb-context/relayer';
import { transactionNotificationConfig } from '@webb-dapp/wallet/providers/polkadot/transaction-notification-config';
import React from 'react';
import { LoggerService } from '@webb-tools/app-util';
import { fromDepositIntoZKPInput } from '@webb-dapp/contracts/utils/zkp-adapters';
import { BigNumber } from 'ethers';

const logger = LoggerService.get('Web3MixerWithdraw');

export class Web3MixerWithdraw extends MixerWithdraw<WebbWeb3Provider> {
  cancelWithdraw(): Promise<void> {
    return Promise.resolve(undefined);
  }

  async mapRelayerIntoActive(relayer: OptionalRelayer): Promise<OptionalActiveRelayer> {
    if (!relayer) {
      return null;
    }
    const evmId = await this.inner.getChainId();
    const chainId = evmIdIntoChainId(evmId);
    return WebbRelayer.intoActiveWebRelayer(
      relayer,
      {
        basedOn: 'evm',
        chain: chainId,
      },
      async (note: string, withdrawFeePercentage: number) => {
        try {
          const evmNote = EvmNote.deserialize(note);
          const contract = await this.inner.getContractBySize(evmNote.amount, evmNote.currency);
          const principleBig = await contract.denomination;
          console.log({ principleBig, withdrawFeePercentage });
          const withdrawFeeMill = withdrawFeePercentage * 1000000;
          console.log({ withdrawFeeMill });

          const withdrawFeeMillBig = BigNumber.from(withdrawFeeMill);
          console.log({ withdrawFeeMillBig });

          const feeBigMill = principleBig.mul(withdrawFeeMillBig);
          console.log({ feeBigMill });

          const feeBig = feeBigMill.div(BigNumber.from(1000000));
          return feeBig.toString();
        } catch (e) {
          return '?';
        }
      }
    );
  }

  get relayers() {
    return this.inner.getChainId().then((evmId) => {
      const chainId = evmIdIntoChainId(evmId);
      const relayers = this.inner.relayingManager.getRelayer({});
      console.log({ relayers });
      return this.inner.relayingManager.getRelayer({
        baseOn: 'evm',
        chainId,
      });
    });
  }

  get hasRelayer() {
    return this.relayers.then((r) => r.length > 0);
  }

  async withdraw(note: string, recipient: string): Promise<void> {
    const activeRelayer = this.activeRelayer[0];
    const evmNote = EvmNote.deserialize(note);
    const deposit = evmNote.intoDeposit();
    if (activeRelayer && activeRelayer.account) {
      this.emit('stateChange', WithdrawState.GeneratingZk);

      transactionNotificationConfig.loading?.({
        address: recipient,
        data: React.createElement('p', {}, `Relaying withdraw throw ${activeRelayer.address}`),
        key: 'mixer-withdraw-evm',
        path: {
          method: 'withdraw',
          section: 'evm-mixer',
        },
      });
      logger.info(`Withdrawing throw relayer with address ${activeRelayer.address}`);
      logger.trace('Note deserialized', evmNote);
      const realyedWithdraw = await activeRelayer.initWithdraw();
      logger.trace('initialized the withdraw WebSocket');
      const mixerInfo = this.inner.getMixerInfoBySize(evmNote.amount, evmNote.currency);
      logger.info(`Withdrawing to mixer info`, mixerInfo);
      const anchorContract = await this.inner.getContractByAddress(mixerInfo.address);
      logger.trace('Generating the zkp');
      const zkpInputWithoutMerkleProof = fromDepositIntoZKPInput(deposit, {
        recipient,
        relayer: activeRelayer.account,
      });
      const zkp = await anchorContract.generateZKP(deposit, zkpInputWithoutMerkleProof);
      this.emit('stateChange', WithdrawState.GeneratingZk);

      logger.trace('Generated the zkp', zkp);
      const tx = realyedWithdraw.generateWithdrawRequest(
        {
          baseOn: 'evm',
          name: chainIdToRelayerName(evmNote.chainId),
          contractAddress: mixerInfo.address,
          endpoint: '',
        },
        zkp.proof,
        {
          fee: bufferToFixed(5000000000000000),
          nullifierHash: bufferToFixed(deposit.nullifierHash),
          recipient,
          refund: bufferToFixed(0),
          relayer: activeRelayer.account,
          root: bufferToFixed(zkp.input.root),
        }
      );
      realyedWithdraw.watcher.subscribe(([nextValue, message]) => {
        switch (nextValue) {
          case RelayedWithdrawResult.PreFlight:
          case RelayedWithdrawResult.OnFlight:
            this.emit('stateChange', WithdrawState.SendingTransaction);
            break;
          case RelayedWithdrawResult.Continue:
            break;
          case RelayedWithdrawResult.CleanExit:
            this.emit('stateChange', WithdrawState.Done);
            this.emit('stateChange', WithdrawState.Ideal);
            transactionNotificationConfig.finalize?.({
              address: recipient,
              data: undefined,
              key: 'mixer-withdraw-evm',
              path: {
                method: 'withdraw',
                section: 'evm-mixer',
              },
            });
            break;
          case RelayedWithdrawResult.Errored:
            this.emit('stateChange', WithdrawState.Failed);
            this.emit('stateChange', WithdrawState.Ideal);
            transactionNotificationConfig.failed?.({
              address: recipient,
              data: message,
              key: 'mixer-withdraw-evm',
              path: {
                method: 'withdraw',
                section: 'evm-mixer',
              },
            });
            break;
        }
      });
      logger.trace('Sending transaction');
      realyedWithdraw.send(tx);
      await realyedWithdraw.await();
    } else {
      logger.trace('Withdrawing without relayer');
      this.emit('stateChange', WithdrawState.GeneratingZk);
      const evmNote = EvmNote.deserialize(note);
      const contract = await this.inner.getContractBySize(evmNote.amount, evmNote.currency);
      try {
        const zkpInputWithoutMerkleProof = fromDepositIntoZKPInput(deposit, {
          recipient,
          relayer: recipient,
        });
        const txReset = await contract.withdraw(deposit, zkpInputWithoutMerkleProof);
        transactionNotificationConfig.loading?.({
          address: recipient,
          data: React.createElement('p', {}, 'Withdraw In Progress'),
          key: 'mixer-withdraw-evm',
          path: {
            method: 'withdraw',
            section: 'evm-mixer',
          },
        });
        this.emit('stateChange', WithdrawState.SendingTransaction);
        await txReset.wait();
        transactionNotificationConfig.finalize?.({
          address: recipient,
          data: undefined,
          key: 'mixer-withdraw-evm',
          path: {
            method: 'withdraw',
            section: 'evm-mixer',
          },
        });
        this.emit('stateChange', WithdrawState.Ideal);
      } catch (e) {
        const reason = await this.inner.reason(e.transactionHash);

        transactionNotificationConfig.failed?.({
          address: recipient,
          data: reason,
          key: 'mixer-withdraw-evm',
          path: {
            method: 'withdraw',
            section: 'evm-mixer',
          },
        });
        await 0;
        throw e;
      }
    }
  }
}
