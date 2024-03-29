import type { HexString } from '@polkadot/util/types';
import { useWebContext } from '@webb-tools/api-provider-environment';
import { useWebbUI } from '@webb-tools/webb-ui-components';
import { useCallback } from 'react';

import ensureError from '../utils/ensureError';
import { evmPublicClient } from '../utils/evm';

const useExecuteTxWithNotification = () => {
  const { notificationApi } = useWebbUI();
  const { activeWallet } = useWebContext();

  const executeTx = useCallback(
    async (
      evmFnc: () => Promise<HexString>,
      substrateFnc: () => Promise<HexString>,
      successMessage: string,
      errorMessage: string
    ): Promise<HexString> => {
      let txHash: HexString = '0x0';

      try {
        if (activeWallet?.platform === 'EVM') {
          txHash = await evmFnc();

          if (!txHash) {
            throw new Error(errorMessage);
          }

          const tx = await evmPublicClient.waitForTransactionReceipt({
            hash: txHash,
          });

          if (tx.status !== 'success') {
            throw new Error(errorMessage);
          }
        } else if (activeWallet?.platform === 'Substrate') {
          txHash = await substrateFnc();

          if (!txHash) {
            throw new Error(errorMessage);
          }
        }

        notificationApi({ variant: 'success', message: successMessage });

        return txHash;
      } catch (error) {
        notificationApi({
          variant: 'error',
          message: ensureError(error).message,
        });

        throw error;
      }
    },
    [notificationApi, activeWallet?.platform]
  );

  return executeTx;
};

export default useExecuteTxWithNotification;
