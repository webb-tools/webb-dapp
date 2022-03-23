import { Currency } from '@webb-dapp/mixer/utils/currency';
import { Token } from '@nepoche/sdk-core';
import { Balance, PalletMixerMixerMetadata as MixerInfo } from '@nepoche/types/interfaces';

import { StorageKey } from '@polkadot/types';

export type NativeTokenProperties = {
  ss58Format: number | null;
  tokenDecimals: Array<number> | null;
  tokenSymbol: Array<string> | null;
};

export type MixerGroupItem = {
  id: number;
  amount: Balance;
  currency: Currency;
  token: Token;
};
export type MixerGroupEntry = [StorageKey, MixerInfo];
