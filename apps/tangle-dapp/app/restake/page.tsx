'use client';

import { BN, BN_ZERO } from '@polkadot/util';
import { TANGLE_TOKEN_DECIMALS } from '@webb-tools/dapp-config/constants/tangle';
import { useMemo } from 'react';
import { formatUnits } from 'viem';

import useRestakingEarnings from '../../data/restaking/useRestakingEarnings';
import useRestakingLimits from '../../data/restaking/useRestakingLimits';
import useRestakingProfile from '../../data/restaking/useRestakingProfile';
import useActiveAccountAddress from '../../hooks/useActiveAccountAddress';
import JobsCard from './JobsCard';
import OverviewCard from './OverviewCard';
import RoleDistributionCard from './RoleDistributionCard';
import RolesEarningsCard from './RolesEarningsCard';

const RestakePage = () => {
  const {
    hasExistingProfile,
    profileTypeOpt: substrateProfileTypeOpt,
    ledgerOpt,
    totalRestaked,
  } = useRestakingProfile();

  const { maxRestakingAmount } = useRestakingLimits();

  const accountAddress = useActiveAccountAddress();

  const { data: earningsRecord, isLoading: isEarningsLoading } =
    useRestakingEarnings(accountAddress);

  const earnings = useMemo(() => {
    if (isEarningsLoading || !earningsRecord) return null;

    return Object.values(earningsRecord).reduce(
      (total, curr) => total.add(curr),
      BN_ZERO
    );
  }, [earningsRecord, isEarningsLoading]);

  const availableForRestake = useMemo(() => {
    const fmtMaxRestakingAmount =
      maxRestakingAmount !== null
        ? new BN(
            formatUnits(
              BigInt(maxRestakingAmount.toString()),
              TANGLE_TOKEN_DECIMALS
            )
          )
        : null;

    if (fmtMaxRestakingAmount !== null && totalRestaked !== null) {
      const availableForRestake = fmtMaxRestakingAmount.gt(totalRestaked)
        ? fmtMaxRestakingAmount.sub(totalRestaked)
        : BN_ZERO;

      return availableForRestake;
    }

    return fmtMaxRestakingAmount;
  }, [maxRestakingAmount, totalRestaked]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-stretch">
      <OverviewCard
        hasExistingProfile={hasExistingProfile}
        profileTypeOpt={substrateProfileTypeOpt}
        isLoading={isEarningsLoading}
        totalRestaked={totalRestaked}
        availableForRestake={availableForRestake}
        earnings={earnings}
      />

      <RoleDistributionCard
        profileType={substrateProfileTypeOpt?.value}
        ledger={ledgerOpt}
      />

      <RolesEarningsCard earnings={earningsRecord} />

      <JobsCard />
    </div>
  );
};

export default RestakePage;
