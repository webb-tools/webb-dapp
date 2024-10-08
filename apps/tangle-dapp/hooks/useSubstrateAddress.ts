import { useMemo } from 'react';

import useNetworkStore from '../context/useNetworkStore';
import { SubstrateAddress } from '../types/utils';
import { toSubstrateAddress } from '../utils';
import useActiveAccountAddress from './useActiveAccountAddress';

/**
 * Obtain the Substrate address of the active account, if any.
 * This provides a centralized way to always work with a Substrate
 * address, regardless of the active account.
 *
 * @remarks
 * If there is no active account, `null` will be returned instead.
 * If the active account is an EVM account, its EVM address will be
 * converted into a Substrate address via hashing.
 */
const useSubstrateAddress = (): SubstrateAddress | null => {
  const activeAccountAddress = useActiveAccountAddress();
  const { network } = useNetworkStore();

  const substrateAddress = useMemo(() => {
    // Wait for the active account address to be set.
    if (activeAccountAddress === null) {
      return null;
    }

    // Note that this handles both EVM and Substrate addresses,
    // so there's no need to check if the address is an EVM address
    // or not.
    return toSubstrateAddress(activeAccountAddress, network.ss58Prefix);
  }, [activeAccountAddress, network.ss58Prefix]);

  return substrateAddress;
};

export default useSubstrateAddress;
