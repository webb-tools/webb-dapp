import { useConnectWallet } from '@webb-tools/api-provider-environment/ConnectWallet';
import { useWebContext } from '@webb-tools/api-provider-environment/webb-context';
import { PresetTypedChainId } from '@webb-tools/dapp-types/ChainId';
import { Button } from '@webb-tools/webb-ui-components';
import type { FC } from 'react';

import ClaimingAccountInput from '../../components/claims/ClaimingAccountInput';

const NotEligibleSection: FC = () => {
  const { activeAccount, activeWallet } = useWebContext();
  const { toggleModal } = useConnectWallet();
  const isActiveWalletEvm = activeWallet?.platform === 'EVM';

  if (!activeAccount) {
    return null;
  }

  return (
    <div className="space-y-4">
      <ClaimingAccountInput activeAccountAddress={activeAccount.address} />

      <div className="space-y-2">
        <Button isFullWidth onClick={() => toggleModal()}>
          Try Another Account
        </Button>

        <Button
          variant="secondary"
          isFullWidth
          onClick={() =>
            toggleModal(
              true,
              isActiveWalletEvm
                ? PresetTypedChainId.TangleTestnetNative
                : PresetTypedChainId.TangleTestnetEVM
            )
          }
        >
          Connect {isActiveWalletEvm ? 'Substrate' : 'EVM'} Wallet
        </Button>
      </div>
    </div>
  );
};

export default NotEligibleSection;
