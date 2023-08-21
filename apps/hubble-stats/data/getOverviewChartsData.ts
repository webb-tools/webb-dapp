import { formatEther } from 'viem';
import vAnchorClient from '@webb-tools/vanchor-client';

import { getTvl, getVolume24h } from './reusable';
import {
  vAnchorAddresses,
  availableSubgraphUrls,
  startingEpoch,
  numOfDatesFromStart,
} from '../constants';
import { getDateFromEpoch, getEpochArray } from '../utils';

type VolumeDataType = {
  [epoch: string]: { deposit: number; withdrawal: number };
};

export type OverviewChartsDataType = {
  currentTvl: number | undefined;
  currentVolume: number | undefined;
  tvlData: {
    date: Date;
    value: number;
  }[];
  volumeData: {
    date: Date;
    deposit: number;
    withdrawal: number;
    volume: number;
  }[];
};

export default async function getOverviewChartsData(): Promise<OverviewChartsDataType> {
  const currentTvl = await getTvl();
  const volume24h = await getVolume24h();

  let tvlData: { [epoch: string]: number } = {};
  try {
    const fetchedTvlData =
      await vAnchorClient.TotalValueLocked.GetVAnchorsTVLByChainsByDateRange(
        availableSubgraphUrls,
        vAnchorAddresses,
        getDateFromEpoch(startingEpoch),
        numOfDatesFromStart
      );

    tvlData = fetchedTvlData.reduce((tvlMap, tvlDataByChain) => {
      Object.keys(tvlDataByChain).forEach((epoch: string) => {
        if (!tvlMap[epoch]) tvlMap[epoch] = 0;
        tvlMap[epoch] += +formatEther(BigInt(tvlDataByChain[epoch]));
      });
      return tvlMap;
    }, {});
  } catch (e) {
    tvlData = {};
  }

  let depositData: { [epoch: string]: number } = {};
  try {
    const fetchedDepositData =
      await vAnchorClient.Deposit.GetVAnchorsDepositByChainsByDateRange(
        availableSubgraphUrls,
        vAnchorAddresses,
        getDateFromEpoch(startingEpoch),
        numOfDatesFromStart
      );

    depositData = fetchedDepositData.reduce(
      (depositMap, depositDataByChain) => {
        Object.keys(depositDataByChain).forEach((epoch: string) => {
          if (!depositMap[epoch]) depositMap[epoch] = 0;
          depositMap[epoch] += +formatEther(BigInt(depositDataByChain[epoch]));
        });
        return depositMap;
      },
      {}
    );
  } catch (e) {
    depositData = {};
  }

  let withdrawalData: { [epoch: string]: number } = {};
  try {
    const fetchedWithdrawalData =
      await vAnchorClient.Withdrawal.GetVAnchorsWithdrawalByChainsByDateRange(
        availableSubgraphUrls,
        vAnchorAddresses,
        getDateFromEpoch(startingEpoch),
        numOfDatesFromStart
      );

    withdrawalData = fetchedWithdrawalData.reduce(
      (withdrawalMap, withdrawalDataByChain) => {
        Object.keys(withdrawalDataByChain).forEach((epoch: string) => {
          if (!withdrawalMap[epoch]) withdrawalMap[epoch] = 0;
          withdrawalMap[epoch] += +formatEther(
            BigInt(withdrawalDataByChain[epoch])
          );
        });
        return withdrawalMap;
      },
      {}
    );
  } catch (e) {
    withdrawalData = {};
  }

  const volumeData: VolumeDataType = getEpochArray(
    startingEpoch,
    numOfDatesFromStart
  ).reduce((volumeMap, epoch) => {
    volumeMap[epoch] = {
      deposit: depositData[epoch] ?? 0,
      withdrawal: 0.01,
    };
    return volumeMap;
  }, {} as VolumeDataType);

  return {
    currentTvl,
    currentVolume: volume24h,
    tvlData: Object.keys(tvlData).map((epoch) => {
      return {
        date: JSON.parse(JSON.stringify(getDateFromEpoch(+epoch))),
        value: tvlData[+epoch],
      };
    }),
    volumeData: Object.keys(volumeData).map((epoch) => {
      return {
        date: JSON.parse(JSON.stringify(getDateFromEpoch(+epoch))),
        deposit: volumeData[+epoch].deposit,
        withdrawal: volumeData[+epoch].withdrawal,
        volume: volumeData[+epoch].deposit + volumeData[+epoch].withdrawal,
      };
    }),
  };
}
