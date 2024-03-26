import { BN } from '@polkadot/util';
import {
  HiddenValue,
  SkeletonLoader,
  Typography,
} from '@webb-tools/webb-ui-components';
import { FC } from 'react';

import useNetworkStore from '../../context/useNetworkStore';
import { formatTokenBalance } from '../../utils/polkadot/tokens';

const BalanceCell: FC<{
  amount: BN | null;
}> = ({ amount }) => {
  const { nativeTokenSymbol } = useNetworkStore();

  const formattedBalance =
    amount !== null ? formatTokenBalance(amount, nativeTokenSymbol) : null;

  return (
    <div className="flex flex-col justify-center p-3 gap-6 flex-grow">
      {formattedBalance !== null ? (
        <Typography variant="body1" fw="semibold">
          <HiddenValue>{formattedBalance}</HiddenValue>
        </Typography>
      ) : (
        <SkeletonLoader className="max-w-[128px]" size="md" />
      )}
    </div>
  );
};

export default BalanceCell;
