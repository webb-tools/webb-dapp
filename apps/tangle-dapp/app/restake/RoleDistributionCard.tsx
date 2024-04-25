import { Typography } from '@webb-tools/webb-ui-components/typography/Typography';
import dynamic from 'next/dynamic';
import { type FC } from 'react';

import GlassCard from '../../components/GlassCard/GlassCard';
import { DistributionDataType, RestakingProfileType } from '../../types';
import assertRestakingService from '../../utils/assertRestakingService';
import getChartDataAreaColorByServiceType from '../../utils/getChartDataAreaColorByServiceType';

const IndependentRoleDistributionChart = dynamic(
  () => import('../../components/charts/IndependentRoleDistributionChart'),
  { ssr: false }
);

const SharedRoleDistributionChart = dynamic(
  () => import('../../components/charts/SharedRoleDistributionChart'),
  { ssr: false }
);

type RoleDistributionCardProps = {
  distribution: DistributionDataType | null;
  profileType?: RestakingProfileType | null;
};

const RoleDistributionCard: FC<RoleDistributionCardProps> = ({
  distribution,
  profileType,
}) => {
  const chartData = !distribution
    ? []
    : Object.entries(distribution).map(([name, value]) => {
        assertRestakingService(name);

        return {
          name,
          value,
          color: getChartDataAreaColorByServiceType(name),
        };
      });

  return (
    <GlassCard className="justify-between">
      <Typography variant="h5" fw="bold">
        Role Distribution
      </Typography>

      {/* TODO: handle loading state */}
      <div className="flex items-center justify-center">
        {profileType === RestakingProfileType.SHARED ? (
          <SharedRoleDistributionChart data={chartData} />
        ) : (
          // TODO: create empty pie chart
          <IndependentRoleDistributionChart
            data={chartData}
            title={profileType ? 'Independent' : 'No data'}
          />
        )}
      </div>
    </GlassCard>
  );
};

export default RoleDistributionCard;
