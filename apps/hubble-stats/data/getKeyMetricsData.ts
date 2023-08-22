import { formatEther } from 'viem';
import vAnchorClient from '@webb-tools/vanchor-client';

import { getTvl, getVolume24h } from './reusable';
import { getDateFromEpoch, getEpochFromDate } from '../utils';
import { vAnchorAddresses, availableSubgraphUrls } from '../constants';

type KeyMetricDataType = {
  tvl: number | undefined;
  tvlChangeRate: number | undefined;
  volume: number | undefined;
  volumeChangeRate: number | undefined;
  relayerFees: number | undefined;
  wrappingFees: number | undefined;
};

export default async function getKeyMetricsData(): Promise<KeyMetricDataType> {
  const tvl = await getTvl();
  const volume = await getVolume24h();

  let relayerFees: number | undefined;
  let wrappingFees: number | undefined;

  try {
    const relayerFeesVAnchorsByChainsData =
      await vAnchorClient.RelayerFee.GetVAnchorsTotalRelayerFeeByChains(
        availableSubgraphUrls,
        vAnchorAddresses
      );

    relayerFees = relayerFeesVAnchorsByChainsData?.reduce(
      (relayerFeesTotal, vAnchorsByChain) => {
        const relayerFeesVAnchorsByChain = vAnchorsByChain.reduce(
          (relayerFeesTotalByChain, vAnchor) =>
            relayerFeesTotalByChain +
            +formatEther(BigInt(vAnchor.totalRelayerFee ?? 0)),
          0
        );
        return relayerFeesTotal + relayerFeesVAnchorsByChain;
      },
      0
    );
  } catch {
    relayerFees = undefined;
  }

  try {
    const wrappingFeesVAnchorsByChainsData =
      await vAnchorClient.WrappingFee.GetVAnchorsTotalWrappingFeeByChains(
        availableSubgraphUrls,
        vAnchorAddresses
      );

    wrappingFees = wrappingFeesVAnchorsByChainsData?.reduce(
      (wrappingFeesTotal, vAnchorsByChain) => {
        const wrappingFeesVAnchorsByChain = vAnchorsByChain.reduce(
          (wrappingFeesTotalByChain, vAnchor) =>
            wrappingFeesTotalByChain +
            +formatEther(BigInt(vAnchor.totalWrappingFee ?? 0)),
          0
        );
        return wrappingFeesTotal + wrappingFeesVAnchorsByChain;
      },
      0
    );
  } catch {
    wrappingFees = undefined;
  }

  let tvl24h: number | undefined;
  try {
    const tvlVAnchorsByChainsData =
      await vAnchorClient.TotalValueLocked.GetVAnchorsTotalValueLockedByChains15MinsInterval(
        availableSubgraphUrls,
        vAnchorAddresses,
        // 48h before
        getDateFromEpoch(getEpochFromDate(new Date()) - 2 * 24 * 60 * 60),
        // 24h before
        getDateFromEpoch(getEpochFromDate(new Date()) - 24 * 60 * 60)
      );

    // get the latest item since it's the most updated
    // this is to prevent the case when there is no data for certain 15mins intervals
    tvl24h = tvlVAnchorsByChainsData?.reduce((tvlTotal, vAnchorsByChain) => {
      if (vAnchorsByChain.length === 0) return tvlTotal;
      return (
        tvlTotal +
        +formatEther(
          BigInt(
            vAnchorsByChain[vAnchorsByChain.length - 1].totalValueLocked ?? 0
          )
        )
      );
    }, 0);
  } catch {
    tvl24h = undefined;
  }

  // follow Uniswap's formula
  const tvlChangeRate =
    tvl && tvl24h ? ((tvl - tvl24h) / tvl24h) * 100 : undefined;

  let volume48h: number | undefined;
  try {
    const volumeVAnchorsByChainsData =
      await vAnchorClient.Volume.GetVAnchorsVolumeByChains15MinsInterval(
        availableSubgraphUrls,
        vAnchorAddresses,
        getDateFromEpoch(getEpochFromDate(new Date()) - 2 * 24 * 60 * 60),
        getDateFromEpoch(getEpochFromDate(new Date()) - 24 * 60 * 60)
      );

    volume48h = volumeVAnchorsByChainsData?.reduce(
      (volumeTotal, vAnchorsByChain) => {
        const volumeVAnchorsByChain = vAnchorsByChain.reduce(
          (volumeTotalByChain, vAnchor) =>
            volumeTotalByChain + +formatEther(BigInt(vAnchor.volume ?? 0)),
          0
        );
        return volumeTotal + volumeVAnchorsByChain;
      },
      0
    );
  } catch {
    volume48h = undefined;
  }

  // follow Uniswap's formula
  const volumeChangeRate =
    typeof volume === 'number' && typeof volume48h === 'number'
      ? volume === volume48h
        ? 0
        : ((volume - volume48h) / volume48h) * 100
      : undefined;

  return {
    tvl,
    tvlChangeRate,
    volume,
    volumeChangeRate,
    relayerFees,
    wrappingFees,
  };
}
