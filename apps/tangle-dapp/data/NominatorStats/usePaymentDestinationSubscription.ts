'use client';

import { WebbError, WebbErrorCodes } from '@webb-tools/dapp-types/WebbError';
import { useEffect, useState } from 'react';
import { type Subscription } from 'rxjs';

import useNetworkStore from '../../context/useNetworkStore';
import useFormatReturnType from '../../hooks/useFormatReturnType';
import { getPolkadotApiRx } from '../../utils/polkadot';

export default function usePaymentDestinationSubscription(
  address: string,
  defaultValue: { value1: number | string | null } = { value1: null }
) {
  const [value1, setValue1] = useState(defaultValue.value1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { rpcEndpoint } = useNetworkStore();

  useEffect(() => {
    let isMounted = true;
    let sub: Subscription | null = null;

    const subscribeData = async () => {
      try {
        const api = await getPolkadotApiRx(rpcEndpoint);

        if (!address) {
          setValue1(null);
          setIsLoading(false);
          return;
        }

        sub = api.query.staking
          .payee(address)
          .subscribe(async (stakingRewardDestinationData) => {
            if (isMounted) {
              const stakingRewardDestination =
                stakingRewardDestinationData.toString();

              setValue1(stakingRewardDestination ?? null);
              setIsLoading(false);
            }
          });
      } catch (error) {
        if (isMounted) {
          setError(
            error instanceof Error
              ? error
              : WebbError.from(WebbErrorCodes.UnknownError)
          );
          setIsLoading(false);
        }
      }
    };

    subscribeData();

    return () => {
      isMounted = false;
      sub?.unsubscribe();
    };
  }, [address, rpcEndpoint]);

  return useFormatReturnType({ isLoading, error, data: { value1 } });
}
