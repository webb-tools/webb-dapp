'use client';

import {
  useConnectWallet,
  useWebContext,
} from '@webb-tools/api-provider-environment';
import { ComputerIcon } from '@webb-tools/icons';
import {
  Button,
  ConnectWalletMobileButton,
  Typography,
  useCheckMobile,
} from '@webb-tools/webb-ui-components';
import { useState } from 'react';

import ManageProfileModalContainer from '../../../containers/ManageProfileModalContainer';
import { ErrorSetContextProvider } from '../../../context/ErrorsContext';

const ActionButton = () => {
  const { loading, isConnecting, activeAccount, activeWallet } =
    useWebContext();

  const [isManageProfileModalOpen, setIsManageProfileModalOpen] =
    useState(false);

  const { toggleModal } = useConnectWallet();
  const { isMobile } = useCheckMobile();

  if (isMobile) {
    return (
      <ConnectWalletMobileButton>
        <div className="flex flex-col items-center justify-center gap-4 py-9">
          <ComputerIcon size="xl" className="mx-auto" />

          <Typography variant="body1" className="text-center">
            For the best staking experience, we recommend using our desktop
            interface for full-feature interface and enhanced controls.
          </Typography>
        </div>
      </ConnectWalletMobileButton>
    );
  }

  if (activeAccount && activeWallet) {
    return (
      <>
        <Button onClick={() => setIsManageProfileModalOpen(true)}>
          Manage Profile
        </Button>

        <ErrorSetContextProvider>
          <ManageProfileModalContainer
            isModalOpen={isManageProfileModalOpen}
            setIsModalOpen={setIsManageProfileModalOpen}
          />
        </ErrorSetContextProvider>
      </>
    );
  }

  // Default to the connect wallet button if no active account
  // or wallet is found.
  return (
    <Button
      isDisabled={loading || isConnecting}
      isLoading={loading || isConnecting}
      loadingText="Connecting..."
      onClick={() => toggleModal(true)}
    >
      Connect Wallet
    </Button>
  );
};

export default ActionButton;
