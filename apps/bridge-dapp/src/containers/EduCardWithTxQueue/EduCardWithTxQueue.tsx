import { useTxQueue } from '@webb-tools/react-hooks';
import { Button, TransactionQueueCard } from '@webb-tools/webb-ui-components';
import { FC, useMemo, memo, useCallback } from 'react';

import { EducationCard } from '../../components/EducationCard';
import { EduCardWithTxQueueProps, TxQueueContainerProps } from './types';
import {
  FixturesProgress,
  NewNotesTxResult,
  Transaction,
  TransactionMetaData,
  TransactionState,
} from '@webb-tools/abstract-api-provider';
import { PresetTypedChainId } from '@webb-tools/dapp-types';

const sharedMetadata: TransactionMetaData = {
  amount: 10,
  tokens: ['webbtTNT', 'webbtTNT'],
  wallets: {
    src: PresetTypedChainId.ArbitrumTestnet,
    dest: PresetTypedChainId.AvalancheFuji,
  },
  token: 'webbtTNT',
  tokenURI: 'https://webb.tools',
  providerType: 'web3' as const,
};

const EduCardWithTxQueue: FC<EduCardWithTxQueueProps> = ({ activeTab }) => {
  const { api, txPayloads } = useTxQueue();

  const isDisplayTxQueueCard = useMemo(
    () => txPayloads.length > 0,
    [txPayloads]
  );

  // Test add transaction
  const handleAddTx = useCallback(
    (name: string) => {
      const tx = Transaction.new(name, sharedMetadata);
      api.registerTransaction(tx);

      const states: Parameters<typeof tx.next>[] = [
        [TransactionState.PreparingTransaction, undefined],
        [
          TransactionState.FetchingFixtures,
          { fixturesList: new Map() } as FixturesProgress,
        ],
        [TransactionState.FetchingLeavesFromRelayer, undefined],
        [TransactionState.SendingTransaction, ''],
        [
          TransactionState.Done,
          {
            txHash: '0x123',
            outputNotes: [],
          } as NewNotesTxResult,
        ],
      ];

      // Simulate transaction progress, update state every 3s
      states.forEach((state, index) => {
        setTimeout(() => {
          tx.next(...state);
        }, index * 3000);
      });
    },
    [api]
  );

  return (
    <div>
      <div className="flex mb-4">
        <Button onClick={() => handleAddTx('Deposit')}>Add Deposit</Button>
        <Button onClick={() => handleAddTx('Withdraw')}>Add Withdraw</Button>
        <Button onClick={() => handleAddTx('Transfer')}>Add Transfer</Button>
      </div>

      {/** Transaction Queue Card */}
      <TxQueueContainer
        isDisplay={isDisplayTxQueueCard}
        transactionPayloads={txPayloads}
      />

      {/** Education cards */}
      <EducationCard
        defaultOpen={!isDisplayTxQueueCard} // If there is a tx queue card, then don't open the education card by default
        currentTab={activeTab}
      />
    </div>
  );
};

export default EduCardWithTxQueue;

const TxQueueContainer = memo<TxQueueContainerProps>(
  ({ isDisplay, transactionPayloads }) => {
    if (!isDisplay) {
      return null;
    }

    return (
      <TransactionQueueCard
        className="w-full mb-4 max-w-none"
        transactions={transactionPayloads}
      />
    );
  }
);
