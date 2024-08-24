import { PromiseOrT } from '@webb-tools/abstract-api-provider';
import { useCallback, useState } from 'react';
import { Abi as ViemAbi, ContractFunctionName } from 'viem';

import usePolling from '../liquidStaking/usePolling';
import useContractReadOnce, {
  ContractReadOptions,
} from './useContractReadOnce';

/**
 * Continuously reads a contract function, refreshing the value
 * at a specified interval.
 */
const useContractRead = <
  Abi extends ViemAbi,
  FunctionName extends ContractFunctionName<Abi, 'pure' | 'view'>,
>(
  abi: Abi,
  options:
    | ContractReadOptions<Abi, FunctionName>
    // Allow consumers to provide a function that returns the options.
    // This is useful for when the options are dependent on some state.
    | (() => PromiseOrT<ContractReadOptions<Abi, FunctionName> | null>),
) => {
  const [isPaused, setIsPaused] = useState(false);
  const readOnce = useContractReadOnce(abi);

  const fetcher = useCallback(async () => {
    // Not yet ready to fetch.
    if (isPaused || readOnce === null) {
      return null;
    }

    const options_ = typeof options === 'function' ? await options() : options;

    // If the options are null, it means that the consumer
    // of this hook does not want to fetch the data at this time.
    if (options_ === null) {
      return null;
    }

    return readOnce(options_);
  }, [isPaused, options, readOnce]);

  const { value, isRefreshing } = usePolling({
    // By providing null, it signals to the hook to maintain
    // its current value and not refresh.
    fetcher: isPaused ? null : fetcher,
  });

  return { value, isRefreshing, isPaused, setIsPaused };
};

export default useContractRead;
