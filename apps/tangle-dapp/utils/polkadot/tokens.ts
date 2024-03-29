import { BN, formatBalance } from '@polkadot/util';

import { TANGLE_TOKEN_DECIMALS } from '../../constants';
import { getPolkadotApiPromise } from './api';

export const formatTokenBalance = (
  balance: BN,
  tokenSymbol?: string
): string => {
  return formatBalance(balance, {
    decimals: TANGLE_TOKEN_DECIMALS,
    withUnit: tokenSymbol ?? false,
  });
};

export const getNativeTokenSymbol = async (rpcEndpoint: string) => {
  const api = await getPolkadotApiPromise(rpcEndpoint);

  const nativeTokenSymbol = (await api.rpc.system.properties()).tokenSymbol
    .unwrap()[0]
    .toString();

  return nativeTokenSymbol;
};
