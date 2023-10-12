import { useWebContext } from '@webb-tools/api-provider-environment';
import { getPlatformMetaData } from '@webb-tools/browser-utils';
import WalletNotInstalledError from '@webb-tools/dapp-types/errors/WalletNotInstalledError';
import {
  Modal,
  ModalContent,
  WalletConnectionCard,
  useWebbUI,
} from '@webb-tools/webb-ui-components';
import { FC, useCallback, useMemo } from 'react';
import { useConnectWallet } from '../../hooks';

export const WalletModal: FC = () => {
  const {
    connectingWalletId,
    failedWalletId,
    isModalOpen,
    resetState,
    selectedWallet,
    connectWallet,
    toggleModal,
    connectError,
  } = useConnectWallet();

  const { notificationApi } = useWebbUI();

  const { apiConfig } = useWebContext();

  const supportedWalletCfgs = useMemo(() => {
    return apiConfig.getSupportedWallets();
  }, [apiConfig]);

  // Get the current failed or connecting wallet
  const getCurrentWallet = useCallback(() => {
    const walletId = failedWalletId ?? connectingWalletId;
    if (!walletId) {
      return undefined;
    }

    return apiConfig.wallets[walletId];
  }, [apiConfig.wallets, connectingWalletId, failedWalletId]);

  const isNotInstalledError = useMemo(() => {
    if (!connectError) {
      return false;
    }

    return (
      connectError instanceof WalletNotInstalledError && connectError.walletId
    );
  }, [connectError]);

  const errorMessage = useMemo(() => {
    if (!connectError) {
      return undefined;
    }

    return connectError.message;
  }, [connectError]);

  // If the error about not installed wallet is shown,
  // we should show download button text
  const errorBtnText = useMemo(() => {
    if (!connectError || !isNotInstalledError) {
      return undefined;
    }

    const wallet = getCurrentWallet();
    if (!wallet) {
      return undefined;
    }

    const walletName = wallet?.name ?? 'Wallet';
    return `Download ${walletName}`;
  }, [connectError, getCurrentWallet, isNotInstalledError]);

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      toggleModal(isOpen);
    },
    [toggleModal]
  );

  const handleCloseAutoFocus = useCallback(() => {
    resetState();
  }, [resetState]);

  const downloadURL = useMemo(() => {
    const { id } = getPlatformMetaData();
    const wallet = getCurrentWallet();

    if (wallet?.installLinks?.[id]) {
      return new URL(wallet.installLinks[id]);
    }
  }, [getCurrentWallet]);

  const handleTryAgainBtnClick = useCallback(
    async () => {
      if (!selectedWallet) {
        notificationApi.addToQueue({
          variant: 'warning',
          message: 'Failed to switch wallet',
          secondaryMessage: 'No wallet selected. Please try again.',
        });
        return;
      }

      if (isNotInstalledError) {
        window.open(downloadURL, '_blank');
        return;
      }

      await connectWallet(selectedWallet);
    },
    // prettier-ignore
    [connectWallet, downloadURL, isNotInstalledError, notificationApi, selectedWallet]
  );

  return (
    <Modal open={isModalOpen} onOpenChange={handleOpenChange}>
      <ModalContent
        onCloseAutoFocus={handleCloseAutoFocus}
        isOpen={isModalOpen}
        isCenter
      >
        <WalletConnectionCard
          wallets={supportedWalletCfgs}
          onWalletSelect={(nextWallet) => connectWallet(nextWallet)}
          onClose={() => toggleModal(false)}
          connectingWalletId={connectingWalletId}
          errorBtnText={errorBtnText}
          errorMessage={errorMessage}
          failedWalletId={failedWalletId}
          onTryAgainBtnClick={handleTryAgainBtnClick}
          downloadWalletURL={downloadURL}
        />
      </ModalContent>
    </Modal>
  );
};
