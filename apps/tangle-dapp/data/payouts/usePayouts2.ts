'use client';

import { assert, BN } from '@polkadot/util';
import { useCallback, useMemo } from 'react';

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

const usePayouts2 = () => {
  const { nativeTokenSymbol } = useNetworkStore();
  const activeSubstrateAddress = useSubstrateAddress();
  const { data: ledgers } = useLedgers();
  const { data: validatorPrefs } = useValidatorPrefs();
  const { data: identities } = useValidatorIdentityNames();
  const { data: eraTotalRewards } = useEraTotalRewards();

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

  const nominations = nominators?.isSome ? nominators.unwrap().targets : null;

  const rewards = useMemo(() => {
    if (nominations === null || erasRewardsPoints === null) {
      return null;
    }

    const rewards: ValidatorReward[] = [];

    for (const validatorAddress of nominations) {
      for (const point of erasRewardsPoints) {
        const era = point[0].args[0].toNumber();
        const rewardsForEra = point[1];

        const validatorRewardPoints =
          rewardsForEra.individual.get(validatorAddress);

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
  }, [erasRewardsPoints, nominations]);

  const { data: erasStakersAll } = usePolkadotApiRx(
    useCallback(
      (api) => {
        if (rewards === null) {
          return null;
        }

        const eras = rewards.map((reward) => reward.era);

        return api.query.staking.erasStakers.multi(eras);
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
      rewards === null ||
      validatorPrefs === null ||
      erasStakersAll === null
    ) {
      return null;
    }

    assert(
      rewards.length === erasStakersAll.length,
      'Each reward should have a corresponding eras stakers entry'
    );

    return rewards.map((reward, index) => {
      console.debug('usePayouts2');

      const ledgerOpt = ledgers.get(reward.validatorAddress);

      // There might not be a ledger for this validator.
      if (ledgerOpt === undefined || ledgerOpt.isNone) {
        return;
      }

      const ledger = ledgerOpt.unwrap();
      const claimedEras = ledger.claimedRewards.map((era) => era.toNumber());

      // Validator has already claimed rewards for this era, so it
      // is not relevant for the payouts.
      if (claimedEras.includes(reward.era)) {
        return;
      }

      const eraTotalRewardOpt = eraTotalRewards.get(reward.era);

      // No rewards for this era.
      if (eraTotalRewardOpt === undefined || eraTotalRewardOpt.isNone) {
        return;
      }

      const eraTotalReward = eraTotalRewardOpt.unwrap();

      // validator's total reward = (era's total reward * validator's points) / era's total reward points
      const validatorTotalReward = eraTotalReward
        .muln(reward.validatorRewardPoints)
        .divn(reward.eraTotalRewardPoints);

      // Validator had no rewards for this era.
      if (validatorTotalReward.isZero()) {
        return;
      }

      // Era stakers and rewards are linked by index.
      const eraStakers = erasStakersAll.at(index);

      assert(
        eraStakers !== undefined,
        'There should be an eras stakers entry for each reward'
      );

      const validatorTotalStake = eraStakers.total.toBn();

      if (validatorTotalStake.isZero() || eraStakers.others.length === 0) {
        return;
      }

      const nominatorStakeInfo = eraStakers.others.find(
        (nominator) => nominator.who.toString() === activeSubstrateAddress
      );

      if (nominatorStakeInfo === undefined || nominatorStakeInfo.isEmpty) {
        return;
      }

      const nominatorTotalStake = nominatorStakeInfo.value.unwrap();

      if (nominatorTotalStake.isZero()) {
        return;
      }

      const prefs = validatorPrefs.get(reward.validatorAddress);

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
        identities.get(reward.validatorAddress) ?? reward.validatorAddress;

      const validatorNominators = eraStakers.others.map((nominator) => {
        const nominatorAddress = nominator.who.toString();

        // Default to the nominator's address if no identity is set.
        const nominatorIdentity =
          identities.get(nominatorAddress) ?? nominatorAddress;

        return {
          address: nominatorAddress,
          identity: nominatorIdentity,
        };
      });

      const nominatorTotalRewardFormatted = formatTokenBalance(
        nominatorTotalReward,
        nativeTokenSymbol
      );

      const validatorTotalRewardFormatted = formatTokenBalance(
        validatorTotalReward,
        nativeTokenSymbol
      );

      const validatorTotalStakeFormatted = formatTokenBalance(
        validatorTotalStake,
        nativeTokenSymbol
      );

      const payout: Payout = {
        era: reward.era,
        validator: {
          address: reward.validatorAddress,
          identity: validatorIdentityName,
        },
        validatorTotalStake: validatorTotalStakeFormatted,
        nominators: validatorNominators,
        validatorTotalReward: validatorTotalRewardFormatted,
        nominatorTotalReward: nominatorTotalRewardFormatted,
        status: 'unclaimed',
      };

      return payout;
    });
  }, [
    activeSubstrateAddress,
    eraTotalRewards,
    erasStakersAll,
    identities,
    ledgers,
    nativeTokenSymbol,
    rewards,
    validatorPrefs,
  ]);

  const processedPayouts = useMemo(() => {
    if (payouts === null || payouts === undefined || !Array.isArray(payouts)) {
      return null;
    }

    return payouts
      .filter((payout): payout is Payout => payout !== undefined)
      .sort((a, b) => a.era - b.era);
  }, [payouts]);

  return processedPayouts;
};

export default usePayouts2;
