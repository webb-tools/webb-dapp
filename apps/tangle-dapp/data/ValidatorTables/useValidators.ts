import { Option } from '@polkadot/types';
import { AccountId32 } from '@polkadot/types/interfaces';
import {
  PalletStakingValidatorPrefs,
  SpStakingPagedExposureMetadata,
  TanglePrimitivesJobsJobInfo,
} from '@polkadot/types/lookup';
import { BN_ZERO } from '@polkadot/util';
import { useCallback, useMemo } from 'react';

import useFormatNativeTokenAmount from '../../hooks/useFormatNativeTokenAmount';
import usePolkadotApiRx from '../../hooks/usePolkadotApiRx';
import { Validator } from '../../types';
import formatBnToDisplayAmount from '../../utils/formatBnToDisplayAmount';
import { getTotalRestakedFromRestakeRoleLedger } from '../../utils/polkadot/restake';
import useCurrentEra from '../staking/useCurrentEra';
import useValidatorsPrefs from '../staking/useValidatorsPrefs';
import useValidatorIdentityNames from './useValidatorIdentityNames';

export const useValidators = (
  addresses: AccountId32[] | null,
  status: 'Active' | 'Waiting'
): Validator[] | null => {
  const formatNativeTokenSymbol = useFormatNativeTokenAmount();
  const { data: currentEra } = useCurrentEra();
  const { data: identityNames } = useValidatorIdentityNames();
  const { data: validatorPrefs } = useValidatorsPrefs();

  const { data: nominations } = usePolkadotApiRx(
    useCallback((api) => api.query.staking.nominators.entries(), [])
  );

  const { data: restakingLedgers } = usePolkadotApiRx(
    useCallback((api) => api.query.roles.ledger.entries(), [])
  );

  const { data: jobIdLookups } = usePolkadotApiRx(
    useCallback((api) => api.query.jobs.validatorJobIdLookup.entries(), [])
  );

  const { data: activeJobs } = usePolkadotApiRx(
    useCallback((api) => api.query.jobs.submittedJobs.entries(), [])
  );

  const { data: stakersOverview } = usePolkadotApiRx(
    useCallback(
      (api) =>
        currentEra === null
          ? null
          : api.query.staking.erasStakersOverview.entries(currentEra),
      [currentEra]
    )
  );

  // Mapping Validator Preferences
  const mappedValidatorPrefs = useMemo(() => {
    const map = new Map<string, PalletStakingValidatorPrefs>();
    validatorPrefs?.forEach(([storageKey, prefs]) => {
      const accountId = storageKey.args[0].toString();
      map.set(accountId, prefs);
    });
    return map;
  }, [validatorPrefs]);

  const mappedStakersOverview = useMemo(() => {
    const map = new Map<string, Option<SpStakingPagedExposureMetadata>>();
    stakersOverview?.forEach(([storageKey, stakersOverview]) => {
      const accountId = storageKey.args[1].toString();
      map.set(accountId, stakersOverview);
    });
    return map;
  }, [stakersOverview]);

  return useMemo(() => {
    if (
      addresses === null ||
      identityNames === null ||
      restakingLedgers === null ||
      nominations === null ||
      validatorPrefs === null ||
      jobIdLookups === null ||
      activeJobs === null
    ) {
      return null;
    }

    return addresses.map((address) => {
      const name = identityNames.get(address.toString()) ?? address.toString();
      const overview = mappedStakersOverview.get(address.toString());

      const balanceTotal = overview?.unwrap().total.unwrap().toBn() ?? BN_ZERO;
      const ownTotal = overview?.unwrap().own.unwrap().toBn() ?? BN_ZERO;

      const balanceTotalFormatted = balanceTotal
        ? formatBnToDisplayAmount(balanceTotal, {
            fractionLength: 4,
            includeCommas: true,
            padZerosInFraction: true,
          })
        : '0';

      const ownTotalFormatted = ownTotal
        ? formatBnToDisplayAmount(ownTotal, {
            fractionLength: 4,
            includeCommas: true,
            padZerosInFraction: true,
          })
        : '0';

      const nominators = nominations.filter(([, nominatorData]) => {
        if (nominatorData.isNone) {
          return false;
        }

        const nominations = nominatorData.unwrap();

        return (
          nominations.targets &&
          nominations.targets.some(
            (target) => target.toString() === address.toString()
          )
        );
      });

      const validatorPref = mappedValidatorPrefs.get(address.toString());
      const commissionRate = validatorPref?.commission.unwrap().toNumber() ?? 0;
      const commission = commissionRate / 10_000_000;

      const ledger = restakingLedgers.find(([, ledgerData]) => {
        if (ledgerData.isNone) return false;

        const ledger = ledgerData.unwrap();
        return address.toString() === ledger.stash.toString();
      })?.[1];

      const totalRestaked =
        ledger && ledger.isSome
          ? getTotalRestakedFromRestakeRoleLedger(ledger)
          : null;

      const idLookupsByAddress = jobIdLookups
        .filter(([account]) => {
          return account.args[0].toString() === address.toString();
        })
        .map(([, jobIdAndType]) => {
          return jobIdAndType.unwrap().toArray()[0][1].toString();
        });

      const activeServices = activeJobs
        .filter(([jobIdAndType]) => {
          const jobId = jobIdAndType.args[1];
          return idLookupsByAddress.includes(jobId.toString());
        })
        .filter(([, jobData]) => {
          // TODO: somehow jobData here has type Codec
          const jobalanceTotalype = (
            jobData as Option<TanglePrimitivesJobsJobInfo>
          ).unwrap().jobType;
          // services are only phase 1 jobs
          return (
            jobalanceTotalype?.isDkgtssPhaseOne ||
            jobalanceTotalype?.isZkSaaSPhaseOne
          );
        });

      return {
        address: address.toString(),
        identityName: name,
        activeServicesNum: activeServices.length,
        restaked: totalRestaked ? formatNativeTokenSymbol(totalRestaked) : '0',
        selfStaked: ownTotalFormatted,
        effectiveAmountStaked: balanceTotalFormatted,
        effectiveAmountStakedRaw: balanceTotal.toString(),
        delegations: nominators.length.toString(),
        commission: commission.toString(),
        status,
      };
    });
  }, [
    addresses,
    identityNames,
    restakingLedgers,
    nominations,
    validatorPrefs,
    jobIdLookups,
    activeJobs,
    mappedStakersOverview,
    formatNativeTokenSymbol,
    mappedValidatorPrefs,
    status,
  ]);
};
