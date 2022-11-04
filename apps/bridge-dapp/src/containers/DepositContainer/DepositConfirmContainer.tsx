import { DepositPayload } from '@webb-tools/abstract-api-provider';
import { downloadString } from '@webb-tools/browser-utils';
import { TransactionState } from '@webb-tools/dapp-types';
import { useBridgeDeposit } from '@webb-tools/react-hooks';
import { useCopyable } from '@webb-tools/ui-hooks';
import {
  DepositConfirm,
  getTokenRingValue,
  useWebbUI,
} from '@webb-tools/webb-ui-components';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { DepositConfirmContainerProps } from './types';

export const DepositConfirmContainer = forwardRef<
  HTMLDivElement,
  DepositConfirmContainerProps
>(({ depositPayload, amount, token, sourceChain, destChain }, ref) => {
  const [checked, setChecked] = useState(false);
  const [isDepositing, setIsDepositing] = useState(false);
  const [progress, setProgress] = useState<null | number>(null);

  const { deposit, stage } = useBridgeDeposit();
  const { setMainComponent } = useWebbUI();

  // Download for the deposit confirm
  const downloadNote = useCallback((depositPayload: DepositPayload) => {
    const note = depositPayload?.note?.serialize() ?? '';
    downloadString(note, note.slice(-note.length - 10) + '.txt');
  }, []);

  // Copy for the deposit confirm
  const { copy } = useCopyable();
  const handleCopy = useCallback(
    (depositPayload: DepositPayload): void => {
      copy(depositPayload.note.serialize() ?? '');
    },
    [copy]
  );

  const onClick = useCallback(async () => {
    if (isDepositing) {
      setMainComponent(undefined);
    } else {
      setIsDepositing(true);
      downloadNote(depositPayload);
      await deposit(depositPayload);
      setIsDepositing(false);
      setMainComponent(undefined);
    }
  }, [deposit, depositPayload, downloadNote, isDepositing, setMainComponent]);

  // Effect to update the progress bar
  useEffect(() => {
    switch (stage) {
      case TransactionState.FetchingFixtures: {
        setProgress(0);
        break;
      }

      case TransactionState.FetchingLeaves: {
        setProgress(25);
        break;
      }

      case TransactionState.GeneratingZk: {
        setProgress(50);
        break;
      }

      case TransactionState.SendingTransaction: {
        setProgress(75);
        break;
      }

      case TransactionState.Done:
      case TransactionState.Failed: {
        setProgress(100);
        break;
      }

      case TransactionState.Cancelling:
      case TransactionState.Ideal: {
        setProgress(null);
        break;
      }

      default: {
        throw new Error(
          'Unknown transaction state in DepositConfirmContainer component'
        );
      }
    }
  }, [stage, setProgress]);

  return (
    <DepositConfirm
      title={isDepositing ? 'Deposit in Progress' : undefined}
      ref={ref}
      note={depositPayload.note.serialize()}
      progress={progress}
      actionBtnProps={{
        isDisabled: !checked,
        children: isDepositing ? 'New Transaction' : 'Deposit',
        onClick,
      }}
      checkboxProps={{
        isChecked: checked,
        onChange: () => setChecked((prev) => !prev),
      }}
      onCopy={() => handleCopy(depositPayload)}
      onDownload={() => downloadNote(depositPayload)}
      amount={amount}
      token1Symbol={token?.symbol}
      sourceChain={getTokenRingValue(sourceChain.symbol)}
      destChain={getTokenRingValue(destChain.symbol)}
      fee={0}
      onClose={() => setMainComponent(undefined)}
    />
  );
});
