import { useWebContext } from '@webb-dapp/react-environment/webb-context';
import { WalletSelect } from '@webb-dapp/ui-components/Inputs/WalletSelect/WalletSelect';
import React from 'react';

type RequiredWalletSelectionProps = {};

export const RequiredWalletSelection: React.FC<RequiredWalletSelectionProps> = ({ children }) => {
  const { activeWallet } = useWebContext();

  return (
    <>
      {!activeWallet && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <WalletSelect />
        </div>
      )}
      {activeWallet && <>{children}</>}
    </>
  );
};
