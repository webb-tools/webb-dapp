import PoolChartsCmp from './PoolChartsCmp';
import { getPoolChartsData } from '../../data';

export default async function PoolChartsContainer({
  poolAddress,
}: {
  poolAddress: string;
}) {
  const {
    tvl,
    deposit24h,
    relayerEarnings24h,
    tvlData,
    volumeData,
    relayerEarningsData,
    currency,
  } = await getPoolChartsData(poolAddress);

  return (
    <PoolChartsCmp
      tvl={tvl}
      deposit24h={deposit24h}
      relayerEarnings24h={relayerEarnings24h}
      tvlData={tvlData}
      volumeData={volumeData}
      relayerEarningsData={relayerEarningsData}
      currency={currency}
    />
  );
}
