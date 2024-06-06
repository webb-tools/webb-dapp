'use client';

import { Spinner } from '@webb-tools/icons';
import { Typography } from '@webb-tools/webb-ui-components/typography/Typography';
import { FC, useMemo } from 'react';

import IndependentRoleDistributionChart from '../../components/charts/IndependentRoleDistributionChart';
import SharedRoleDistributionChart from '../../components/charts/SharedRoleDistributionChart';
import GlassCard from '../../components/GlassCard/GlassCard';
import useRestakingProfile from '../../data/restaking/useRestakingProfile';
import { RestakingProfileType } from '../../types';
import { getRoleDistributionFromRestakeRoleLedger } from '../../utils/polkadot/restake';
import getChartDataAreaColorByServiceType from '../../utils/restaking/getChartDataAreaColorByServiceType';
import entriesOf from '../../utils/entriesOf';

const RoleDistributionCard: FC = () => {
  const { ledgerOpt, profileTypeOpt, isLoading } = useRestakingProfile();

  const distribution = useMemo(
    () => getRoleDistributionFromRestakeRoleLedger(ledgerOpt),
    [ledgerOpt],
  );

  const chartData = useMemo(() => {
    if (!distribution) return [];

    return entriesOf(distribution).map(([name, value]) => ({
      name,
      value,
      color: getChartDataAreaColorByServiceType(name),
    }));
  }, [distribution]);

  return (
    <GlassCard className="justify-between">
      <Typography variant="h5" fw="bold">
        Role Distribution
      </Typography>

      <div className="flex items-center justify-center">
        {isLoading ? (
          <div className="h-[200px] w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        ) : profileTypeOpt?.value === RestakingProfileType.SHARED ? (
          <SharedRoleDistributionChart data={chartData} />
        ) : (
          // TODO: create empty pie chart
          <IndependentRoleDistributionChart
            data={chartData}
            title={profileTypeOpt ? 'Independent' : 'No data'}
          />
        )}
      </div>
    </GlassCard>
  );
};

export default RoleDistributionCard;
