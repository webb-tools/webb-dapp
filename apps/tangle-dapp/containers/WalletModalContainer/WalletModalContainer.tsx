'use client';

import {
  useConnectWallet,
  useWebContext,
} from '@webb-tools/api-provider-environment';
import getPlatformMetaData from '@webb-tools/browser-utils/platform/getPlatformMetaData';
import { PresetTypedChainId } from '@webb-tools/dapp-types';
import { useWebbUI, WalletModal } from '@webb-tools/webb-ui-components';

export const WalletModalContainer = () => {
  const {
    connectingWalletId,
    failedWalletId,
    isModalOpen,
    resetState,
    selectedWallet,
    connectWallet,
    toggleModal,
    connectError,
    supportedWallets,
  } = useConnectWallet({ useAllWallets: true });

  const { notificationApi } = useWebbUI();

  const { apiConfig } = useWebContext();

  return (
    <WalletModal
      connectingWalletId={connectingWalletId}
      platformId={getPlatformMetaData()?.id ?? null}
      failedWalletId={failedWalletId}
      isModalOpen={isModalOpen}
      resetState={resetState}
      selectedWallet={selectedWallet}
      connectWallet={connectWallet}
      toggleModal={toggleModal}
      connectError={connectError}
      supportedWallets={supportedWallets}
      notificationApi={notificationApi}
      apiConfig={apiConfig}
      targetTypedChainIds={{
        evm: PresetTypedChainId.TangleTestnetEVM,
        substrate: PresetTypedChainId.TangleTestnetNative,
      }}
      contentDefaultText="Connect your EVM or Substrate wallet to interact on the Tangle Network"
    />
  );
};
