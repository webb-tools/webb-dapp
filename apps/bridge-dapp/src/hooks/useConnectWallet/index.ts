import { useWebContext } from '@webb-tools/api-provider-environment/webb-context';
import { useActiveWallet } from '@webb-tools/api-provider-environment/WebbProvider';
import { type WalletConfig } from '@webb-tools/dapp-config';
import type { WalletId, WebbError } from '@webb-tools/dapp-types';
import WalletNotInstalledError from '@webb-tools/dapp-types/errors/WalletNotInstalledError';
import { useObservableState } from 'observable-hooks';
import { useCallback, useEffect, useMemo } from 'react';
import subjects, { WalletState } from './subjects';

export type UseConnectWalletReturnType = {
  /**
   * Boolean to check if the wallet modal is open
   */
  isModalOpen: boolean;

  /**
   * Toggle or set state of the wallet modal
   */
  toggleModal: (isOpen?: boolean) => void;

  /**
   * Function to connect wallet
   */
  connectWallet: (wallet: WalletConfig) => Promise<void> | void;

  /**
   * Wallet connection state for ui display
   */
  walletState: WalletState;

  /**
   * Current selected wallet for ui display
   */
  selectedWallet?: WalletConfig | undefined;

  /**
   * Connecting wallet id
   */
  connectingWalletId?: WalletId;

  /**
   * Failed wallet id
   */
  failedWalletId?: WalletId;

  /**
   * Boolean to check if wallet is connected
   */
  isWalletConnected: boolean;

  /**
   * Connect wallet error
   */
  connectError?: WebbError;

  /**
   * Function to reset the wallet connection state
   * and selected wallet state
   * @returns void
   */
  resetState: () => void;
};

/**
 * Hook contains the logic to connect open the wallet modal
 * and connect to a wallet
 */
export const useConnectWallet = (): UseConnectWalletReturnType => {
  // Get the states from the subjects
  const isModalOpen = useObservableState(subjects.isWalletModalOpenSubject);
  const selectedWallet = useObservableState(subjects.selectedWalletSubject);

  const walletState = useObservableState(subjects.walletStateSubject);
  const connectError = useObservableState(subjects.connectErrorSubject);

  const { appEvent, loading } = useWebContext();

  const [activeWallet, setActiveWallet] = useActiveWallet();

  const connectingWalletId = useMemo<number | undefined>(
    () =>
      walletState === WalletState.CONNECTING ? selectedWallet?.id : undefined,
    [selectedWallet?.id, walletState]
  );

  const failedWalletId = useMemo<number | undefined>(
    () => (walletState === WalletState.FAILED ? selectedWallet?.id : undefined),
    [selectedWallet?.id, walletState]
  );

  const isWalletConnected = useMemo(
    () => [activeWallet, !loading].every(Boolean),
    [activeWallet, loading]
  );

  // Subscribe to app events
  useEffect(() => {
    let isSubscribed = true;

    appEvent.on('walletConnectionState', (state) => {
      switch (state.status) {
        case 'failed': {
          if (isSubscribed) {
            subjects.setWalletState(WalletState.FAILED);
            subjects.setConnectError(state.error);
          }
          break;
        }

        case 'loading': {
          isSubscribed && subjects.setWalletState(WalletState.CONNECTING);
          break;
        }

        case 'sucess': {
          isSubscribed && subjects.setWalletState(WalletState.SUCCESS);
          break;
        }

        case 'idle': {
          isSubscribed && subjects.setWalletState(WalletState.IDLE);
          break;
        }

        default: {
          throw new Error(
            'Unknown `walletConnectionState` inside `useConnectWallet` hook'
          );
        }
      }
    });

    return () => {
      isSubscribed = false;
    };
  }, [appEvent]);

  /**
   * Toggle or set state of the wallet modal
   * and set the next chain
   */
  const toggleModal = useCallback((isOpenArg?: boolean) => {
    const isOpen = isOpenArg ?? !subjects.isWalletModalOpenSubject.getValue();

    subjects.setWalletModalOpen(isOpen);
  }, []);

  const connectWallet = useCallback(
    async (nextWallet: WalletConfig) => {
      subjects.setSelectedWallet(nextWallet);
      subjects.setWalletState(WalletState.CONNECTING);

      const provider = await nextWallet.detect();

      if (!provider) {
        subjects.setWalletState(WalletState.FAILED);
        subjects.setConnectError(new WalletNotInstalledError(nextWallet.id));
        return;
      }

      subjects.setConnectError(undefined);
      subjects.setWalletState(WalletState.SUCCESS);
      subjects.setWalletModalOpen(false);
      setActiveWallet(nextWallet);
    },
    [setActiveWallet]
  );

  /**
   * Function to reset the wallet state to idle
   */
  const resetState = useCallback(() => {
    subjects.setConnectError(undefined);
    subjects.setWalletModalOpen(false);
    subjects.setWalletState(WalletState.IDLE);
    subjects.setSelectedWallet(undefined);
  }, []);

  return {
    connectingWalletId,
    connectError,
    failedWalletId,
    isModalOpen,
    isWalletConnected,
    resetState,
    selectedWallet,
    toggleModal,
    walletState,
    connectWallet,
  };
};
