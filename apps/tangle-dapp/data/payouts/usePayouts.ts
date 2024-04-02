'use client';

import { BN } from '@polkadot/util';
import { useCallback, useMemo } from 'react';
import { map } from 'rxjs';

import useNetworkStore from '../../context/useNetworkStore';
import usePolkadotApiRx from '../../hooks/usePolkadotApiRx';
import useSubstrateAddress from '../../hooks/useSubstrateAddress';
import { Payout } from '../../types';
import calculateBnPercentage from '../../utils/calculateBnPercentage';
import { formatTokenBalance } from '../../utils/polkadot';
import useValidatorPrefs from '../staking/useValidatorPrefs';
import useValidatorIdentityNames from '../ValidatorTables/useValidatorIdentityNames';
import useEraTotalRewards from './useEraTotalRewards';
import useLedgers from './useLedgers';

type ValidatorReward = {
  validatorAddress: string;
  era: number;
  eraTotalRewardPoints: number;
  validatorRewardPoints: number;
};

const usePayouts = () => {
  const { nativeTokenSymbol } = useNetworkStore();
  const activeSubstrateAddress = useSubstrateAddress();
  const { data: ledgers } = useLedgers();
  const { data: validatorPrefs } = useValidatorPrefs();
  const { data: identities } = useValidatorIdentityNames();
  const { data: eraTotalRewards } = useEraTotalRewards();

  // TODO: One way to significantly optimize this hook: Have a dropdown button allowing the user to select how many eras they want to see payouts for. By default, have this be set to something reasonable such as 2. Max should be equal to `constants.maxHistoryDepth` from the chain. Currently, it defaults to all eras, which is quite expensive and takes time!
  const { data: erasRewardsPoints } = usePolkadotApiRx(
    useCallback((api) => api.query.staking.erasRewardPoints.entries(), [])
  );

  const { data: nominators } = usePolkadotApiRx(
    useCallback(
      (api, activeSubstrateAddress) =>
        api.query.staking.nominators(activeSubstrateAddress),
      []
    )
  );

  const rewards = useMemo(() => {
    const nominations =
      nominators?.isSome === true ? nominators.unwrap().targets : null;

    if (nominations === null || erasRewardsPoints === null) {
      return null;
    }

    const rewards: ValidatorReward[] = [];

    for (const validatorAddress of nominations) {
      for (const point of erasRewardsPoints) {
        const era = point[0].args[0].toNumber();
        const rewardsForEra = point[1];

        // TODO: It's already given as a BTreeMap, but the key is `AccountId32`, and `string` can't be used as a key (it returns undefined!). Need to take advantage of the tree structure and stop processing the tree into an array, which is more expensive.
        const entry = Array.from(rewardsForEra.individual.entries()).find(
          ([key]) => key.toString() === validatorAddress.toString()
        );

        const validatorRewardPoints = entry?.[1];

        // No entry for this validator in this era.
        if (validatorRewardPoints === undefined) {
          continue;
        }

        rewards.push({
          era,
          eraTotalRewardPoints: rewardsForEra.total.toNumber(),
          validatorAddress: validatorAddress.toString(),
          validatorRewardPoints: validatorRewardPoints.toNumber(),
        });
      }
    }

    return rewards;
  }, [erasRewardsPoints, nominators]);

  const { data: exposuresAndRewards } = usePolkadotApiRx(
    useCallback(
      (api) => {
        if (rewards === null) {
          return null;
        }

        // Get all exposures for all eras, without specifying the validator
        // (that will cause it to return all exposures for all validators in each era).
        const eras = rewards.map((reward) => [reward.era, null]);

        return api.query.staking.erasStakers.multi(eras).pipe(
          map((exposure) => {
            return exposure.map((exposure, index) => ({
              era: rewards[index].era,
              total: exposure.total,
              nominators: exposure.others,
              validatorAddress: rewards[index].validatorAddress,
              validatorRewardPoints: rewards[index].validatorRewardPoints,
              eraTotalRewardPoints: rewards[index].eraTotalRewardPoints,
            }));
          })
        );
      },
      [rewards]
    )
  );

  const payouts = useMemo(() => {
    if (
      ledgers === null ||
      identities === null ||
      activeSubstrateAddress === null ||
      eraTotalRewards === null ||
      validatorPrefs === null ||
      exposuresAndRewards === null
    ) {
      return null;
    }

    return exposuresAndRewards.map((exposureAndRewards) => {
      // No nominators for this validator in this era. Skip it.
      if (exposureAndRewards.nominators.length === 0) {
        return;
      }

      const ourStakeInfo = exposureAndRewards.nominators.find(
        (nominator) => nominator.who.toString() === activeSubstrateAddress
      );

      // If this validator is not staked by the current user, skip it.
      if (ourStakeInfo === undefined || ourStakeInfo.isEmpty) {
        return;
      }

      const validatorTotalStake = exposureAndRewards.total.toBn();

      if (validatorTotalStake.isZero()) {
        return;
      }

      const ledgerOpt = ledgers.get(exposureAndRewards.validatorAddress);

      // There might not be a ledger for this validator.
      if (ledgerOpt === undefined || ledgerOpt.isNone) {
        return;
      }

      const ledger = ledgerOpt.unwrap();

      // TODO: The type system is reporting this as could never be undefined, but it CAN be. This likely means that the Substrate types are outdated. This is a temporary fix.
      const claimedRewards = ledger.claimedRewards ?? [];

      const claimedEras = claimedRewards.map((era) => era.toNumber());

      // Validator has already claimed rewards for this era, so it
      // is not relevant for the payouts.
      if (claimedEras.includes(exposureAndRewards.era)) {
        return;
      }

      const eraTotalRewardOpt = eraTotalRewards.get(exposureAndRewards.era);

      // No rewards for this era.
      if (eraTotalRewardOpt === undefined || eraTotalRewardOpt.isNone) {
        return;
      }

      const eraTotalReward = eraTotalRewardOpt.unwrap();

      // validator's total reward = (era's total reward * validator's points) / era's total reward points
      const validatorTotalReward = eraTotalReward
        .muln(exposureAndRewards.validatorRewardPoints)
        .divn(exposureAndRewards.eraTotalRewardPoints);

      // Validator had no rewards for this era.
      if (validatorTotalReward.isZero()) {
        return;
      }

      const nominatorTotalStake = ourStakeInfo.value.unwrap();

      if (nominatorTotalStake.isZero()) {
        return;
      }

      const prefs = validatorPrefs.get(exposureAndRewards.validatorAddress);

      // TODO: Wouldn't this constitute some sort of logic error? How did this validator get here if it has no prefs?
      if (prefs === undefined) {
        return;
      }

      // TODO: Shouldn't be getting this constant from chain? Why is it hardcoded, and what does it represent?
      const COMMISSION_DIVISOR = new BN(10_000_000);

      const validatorCommissionPercentage = calculateBnPercentage(
        prefs.commission.toBn(),
        COMMISSION_DIVISOR
      );

      const validatorCommission = validatorTotalReward.muln(
        validatorCommissionPercentage
      );

      const nominatorStakePercentage = calculateBnPercentage(
        nominatorTotalStake,
        validatorTotalStake
      );

      const distributableReward = validatorTotalReward.sub(validatorCommission);

      const nominatorTotalReward = distributableReward.muln(
        nominatorStakePercentage
      );

      // Default to the validator's address if no identity is set.
      const validatorIdentityName =
        identities.get(exposureAndRewards.validatorAddress) ??
        exposureAndRewards.validatorAddress;

      const validatorNominators = exposureAndRewards.nominators.map(
        (nominator) => {
          const nominatorAddress = nominator.who.toString();

          // Default to the nominator's address if no identity is set.
          const nominatorIdentity =
            identities.get(nominatorAddress) ?? nominatorAddress;

          return {
            address: nominatorAddress,
            identity: nominatorIdentity,
          };
        }
      );

      const payout: Payout = {
        era: exposureAndRewards.era,
        nominators: validatorNominators,
        status: 'unclaimed',
        validator: {
          address: exposureAndRewards.validatorAddress,
          identity: validatorIdentityName,
        },
        validatorTotalStake: formatTokenBalance(
          validatorTotalStake,
          nativeTokenSymbol
        ),
        validatorTotalReward: formatTokenBalance(
          validatorTotalReward,
          nativeTokenSymbol
        ),
        nominatorTotalReward: formatTokenBalance(
          nominatorTotalReward,
          nativeTokenSymbol
        ),
      };

      return payout;
    });
  }, [
    activeSubstrateAddress,
    eraTotalRewards,
    exposuresAndRewards,
    identities,
    ledgers,
    nativeTokenSymbol,
    validatorPrefs,
  ]);

  const processedPayouts = useMemo(() => {
    if (payouts === null) {
      return null;
    }

    return payouts
      .filter((payout): payout is Payout => payout !== undefined)
      .sort((a, b) => a.era - b.era);
  }, [payouts]);

  return processedPayouts;
};

export default usePayouts;
