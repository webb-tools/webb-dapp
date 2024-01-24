import { ApiPromise } from '@polkadot/api';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { web3FromAddress } from '@polkadot/extension-dapp';
import { ISubmittableResult } from '@polkadot/types/types';
import { useActiveAccount } from '@webb-tools/api-provider-environment/WebbProvider/subjects';
import { useWebbUI } from '@webb-tools/webb-ui-components';
import { useCallback, useEffect, useState } from 'react';

import { getPolkadotApiPromise } from '../constants';

export enum TxStatus {
  NotYetInitiated,
  Processing,
  Error,
  Complete,
  TimedOut,
}

export type TxFactory<T extends ISubmittableResult> = (
  api: ApiPromise
) => Promise<SubmittableExtrinsic<'promise', T> | null>;

function useTx<T extends ISubmittableResult>(
  factory: TxFactory<T>,
  notifyStatusUpdates = false,
  timeoutDelay = 60_000
) {
  const [status, setStatus] = useState(TxStatus.NotYetInitiated);
  const [hash, setHash] = useState<string | null>(null);
  const activeAccount = useActiveAccount();
  const [error, setError] = useState<Error | null>(null);
  const { notificationApi } = useWebbUI();

  const getInjector = useCallback(async () => {
    if (activeAccount === null || activeAccount[0] === null) {
      return null;
    }

    return web3FromAddress(activeAccount[0].address);
  }, [activeAccount]);

  useEffect(() => {
    // Still waiting for the consumer to perform the transaction.
    if (status !== TxStatus.Processing) {
      return;
    }

    let isMounted = true;

    const signAndSend = async () => {
      if (activeAccount === null || activeAccount[0] === null) {
        return;
      }

      const senderAddress = activeAccount[0].address;
      const api = await getPolkadotApiPromise();
      const injector = await getInjector();
      const tx = await factory(api);

      // Factory is not yet ready to produce the transaction.
      // This is usually because the user hasn't yet connected their wallet.
      if (tx === null) {
        return;
      }
      // Wait until the injector is ready.
      else if (injector === null) {
        return;
      }

      tx.signAndSend(senderAddress, { signer: injector.signer }, (status) => {
        if (!isMounted) {
          return;
        }

        setHash(status.txHash.toHex());

        const didSucceed = !status.isError && !status.isWarning;

        setStatus(didSucceed ? TxStatus.Complete : TxStatus.Error);

        const error =
          status.internalError ||
          new Error(
            'Unexpected error with no additional information available'
          );

        if (!didSucceed) {
          setError(error);
        }
      }).catch((error) => {
        if (!isMounted) {
          return;
        }

        setStatus(TxStatus.Error);
        setError(error);
      });
    };

    signAndSend();

    const timeoutHandle = setTimeout(() => {
      if (!isMounted) {
        return;
      }

      setStatus(TxStatus.TimedOut);
    }, timeoutDelay);

    return () => {
      clearTimeout(timeoutHandle);
      isMounted = false;
    };
  }, [activeAccount, factory, getInjector, hash, status, timeoutDelay]);

  useEffect(() => {
    if (!notifyStatusUpdates) {
      return;
    }

    let primaryMessage: string | null = null;
    let secondaryMessage: string | null = null;
    let variant: 'error' | 'success' | 'warning' | 'default' | 'info' =
      'default';

    switch (status) {
      case TxStatus.Complete:
        primaryMessage = 'Transaction completed successfully.';
        variant = 'success';

        break;
      case TxStatus.TimedOut:
        primaryMessage = 'The transaction timed out.';
        variant = 'warning';

        break;
      case TxStatus.Error:
        primaryMessage = 'An error occurred during the transaction';
        secondaryMessage = error?.message || null;
        variant = 'error';

        break;
      default:
        return;
    }

    notificationApi({
      variant,
      message: primaryMessage,
      secondaryMessage: secondaryMessage ?? undefined,
    });
  }, [error?.message, notificationApi, notifyStatusUpdates, status]);

  const perform = () => {
    // Prevent the consumer from re-triggering the transaction
    // while it's still processing.
    if (status === TxStatus.Processing) {
      return;
    }

    setStatus(TxStatus.Processing);
  };

  const reset = () => {
    setError(null);
    setHash(null);
    setStatus(TxStatus.NotYetInitiated);
  };

  return { perform, status, error, hash, reset };
}

export default useTx;
