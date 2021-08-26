import { EvmNote } from '@webb-dapp/contracts/utils/evm-note';
import { Deposit } from '@webb-dapp/contracts/utils/make-deposit';
import { DepositPayload as IDepositPayload, MixerDeposit, MixerSize } from '@webb-dapp/react-environment/webb-context';
import { getNativeCurrencySymbol } from '@webb-dapp/apps/configs/evm/SupportedMixers';
import { WebbWeb3Provider } from './webb-web3-provider';
import { transactionNotificationConfig } from '@webb-dapp/wallet/providers/polkadot/transaction-notification-config';

import React from 'react';
import { DepositNotification } from '@webb-dapp/ui-components/notification/DepositNotification';
import { getEVMChainName } from '@webb-dapp/apps/configs/evm/SupportedMixers';

type DepositPayload = IDepositPayload<EvmNote, [Deposit, number]>;

export class Web3MixerDeposit extends MixerDeposit<WebbWeb3Provider, DepositPayload> {
  async deposit(depositPayload: DepositPayload): Promise<void> {
    transactionNotificationConfig.loading?.({
      address: '',
      data: React.createElement(DepositNotification,
        {
          chain: getEVMChainName(depositPayload.note.chainId),
          amount: depositPayload.note.amount,
          currency: depositPayload.note.currency,
        }
      ),
      key: 'mixer-deposit-evm',
      path: {
        method: 'deposit',
        section: 'evm-mixer',
      },
    });
    const [deposit, amount] = depositPayload.params;
    const contract = await this.inner.getContractBySize(amount, getNativeCurrencySymbol(await this.inner.getChainId()));
    try {
      await contract.deposit(deposit.commitment);
      transactionNotificationConfig.finalize?.({
        address: '',
        data: undefined,
        key: `mixer-deposit-evm`,
        path: {
          method: 'deposit',
          section: 'evm-mixer',
        },
      });
    } catch (e) {
      console.log(e);
      if (e.code == 4001) {
        transactionNotificationConfig.failed?.({
          address: '',
          data: 'User Rejected Deposit',
          key: `mixer-deposit-evm`,
          path: {
            method: 'deposit',
            section: 'evm-mixer',
          },
        });
      } else {
        transactionNotificationConfig.failed?.({
          address: '',
          data: 'Deposit Transaction Failed',
          key: `mixer-deposit-evm`,
          path: {
            method: 'deposit',
            section: 'evm-mixer',
          },
        });
      }
    }
  }

  async generateNote(mixerAddress: string): Promise<DepositPayload> {
    const contract = await this.inner.getContractByAddress(mixerAddress);
    const mixerInfo = this.inner.getMixers().getMixerInfoByAddress(mixerAddress);
    if (!mixerInfo) {
      throw new Error(`mixer not found from storage`);
    }

    const depositPayload = await contract.createDeposit(mixerInfo.symbol);
    return {
      note: depositPayload.note,
      params: [depositPayload.deposit, mixerInfo.size],
    };
  }

  async getSizes(): Promise<MixerSize[]> {
    return this.inner.getMixerSizes(getNativeCurrencySymbol( await this.inner.getChainId()));
  }
}
