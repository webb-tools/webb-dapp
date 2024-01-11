import { LockUnlockLineIcon, TimeLineIcon } from '@webb-tools/icons';
import { Typography } from '@webb-tools/webb-ui-components';
import { type FC } from 'react';

import { BondedTokensBalanceInfoProps } from './types';

export const BondedTokensBalanceInfo: FC<BondedTokensBalanceInfoProps> = ({
  type,
  value,
}) => (
  <div className="flex items-center justify-between">
    <div className="flex gap-1 items-center">
      {type === 'unbonded' ? <LockUnlockLineIcon /> : <TimeLineIcon />}

      {type === 'unbonded' ? (
        <>
          <Typography variant="body1" fw="normal">
            Unbonded:
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="body1" fw="normal">
            Unbonding:
          </Typography>
        </>
      )}
    </div>

    <Typography variant="body1" fw="normal">
      {value} tTNT
    </Typography>
  </div>
);
