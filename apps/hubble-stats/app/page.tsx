import { type FC, Suspense } from 'react';
import {
  KeyMetricsTableContainer,
  ShieldedTablesContainer,
} from '../containers';
import {
  OverviewTvlChartContainer,
  OverviewVolumeChartContainer,
} from '../containers/charts';
import { getEpoch24H, getEpochStart, getNumDatesFromStart } from '../utils';
import { ContainerSkeleton } from '../components';

// force homepage to be dynamic
export const dynamic = 'force-dynamic';

// revalidate every 5 seconds
export const revalidate = 5;

export default async function Index() {
  const startingEpoch = getEpochStart();
  const epoch24h = getEpoch24H();

  const chartProps = {
    numDatesFromStart: getNumDatesFromStart(),
    startingEpoch,
  };

  return (
    <div className="py-4 space-y-6">
      {/** Overview charts */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Suspense fallback={<ChartSkeleton />}>
          <OverviewTvlChartContainer {...chartProps} />
        </Suspense>

        <Suspense fallback={<ChartSkeleton />}>
          <OverviewVolumeChartContainer {...chartProps} />
        </Suspense>
      </div>

      <KeyMetricsTableContainer
        epochStart={startingEpoch}
        epoch24h={epoch24h}
      />

      <ShieldedTablesContainer />
    </div>
  );
}

const ChartSkeleton: FC = () => {
  return <ContainerSkeleton numOfRows={1} className="min-h-[330px]" />;
};
