import BN from 'bn.js';
import { useCallback } from 'react';
import { map, of } from 'rxjs';

import usePolkadotApiRx from '../../hooks/usePolkadotApiRx';
import useSubstrateAddress from '../../hooks/useSubstrateAddress';

const useRestakingTotalRewards = (): ReturnType<
  typeof usePolkadotApiRx<BN | null>
> => {
  const substrateAccount = useSubstrateAddress();

  return usePolkadotApiRx<BN | null>(
    useCallback(
      (apiRx) => {
        if (!substrateAccount) return of(null);

        if (!apiRx.query.jobs.validatorRewards) return of(null);

        return apiRx.query.jobs.validatorRewards(substrateAccount).pipe(
          map((reward) => {
            if (reward.isNone) {
              return null;
            }

            return reward.unwrap().toBn();
          })
        );
      },
      [substrateAccount]
    )
  );
};

export default useRestakingTotalRewards;