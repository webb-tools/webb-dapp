'use client';

import { isEthereumAddress } from '@polkadot/util-crypto';
import ensureHex from '@webb-tools/dapp-config/utils/ensureHex';
import { WebbError, WebbErrorCodes } from '@webb-tools/dapp-types/WebbError';
import { useEffect, useState } from 'react';
import { type Subscription } from 'rxjs';
import { formatEther } from 'viem';

import useNetworkStore from '../../context/useNetworkStore';
import useFormatReturnType from '../../hooks/useFormatReturnType';
import { evmPublicClient } from '../../utils/evm';
import { getPolkadotApiRx } from '../../utils/polkadot';

export default function useTokenWalletBalance(
  address: string,
  defaultValue: { value1: number | null } = { value1: null }
) {
  const [value1, setValue1] = useState(defaultValue.value1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { rpcEndpoint } = useNetworkStore();

  useEffect(() => {
    let isMounted = true;
    let sub: Subscription | null = null;

    const fetchData = async () => {
      if (!address || address === '0x0') {
        setValue1(null);
        setIsLoading(false);
        return;
      }

      // Ethereum Wallet case
      if (isEthereumAddress(address)) {
        try {
          const balance = await evmPublicClient.getBalance({
            address: ensureHex(address),
          });

          const walletBalance = formatEther(balance);

          setValue1(Number(walletBalance));
          setIsLoading(false);
          return;
        } catch (error) {
          setError(
            error instanceof Error
              ? error
              : WebbError.from(WebbErrorCodes.UnknownError)
          );

          setIsLoading(false);
        }
      }

      // Substrate Wallet case
      try {
        const api = await getPolkadotApiRx(rpcEndpoint);
        if (!api) {
          throw WebbError.from(WebbErrorCodes.ApiNotReady);
        }

        sub = api.query.system.account(address).subscribe(async (accData) => {
          if (isMounted) {
            const freeBalance = accData.data.free.toBigInt();
            const reservedBalance = accData.data.reserved.toBigInt();
            const frozenBalance = accData.data.frozen.toBigInt();
            // total balance = free balance + reserved balance - frozenBalance
            setValue1(
              Number(formatEther(freeBalance + reservedBalance - frozenBalance))
            );
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

    fetchData();

    return () => {
      isMounted = false;
      sub?.unsubscribe();
    };
  }, [address, rpcEndpoint]);

  return useFormatReturnType({ isLoading, error, data: { value1 } });
}
