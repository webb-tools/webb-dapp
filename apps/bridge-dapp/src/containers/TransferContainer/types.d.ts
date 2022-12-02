import { PropsOf } from '@webb-tools/webb-ui-components/types';
import { BridgeTabContainerProps } from '../types';
import { Currency } from '@webb-tools/abstract-api-provider';
import { AssetType } from '@webb-tools/webb-ui-components/components/ListCard/types';
import { Chain } from '@webb-tools/dapp-config';

export type CurrencyRecord = Record<Currency['id'], Currency>;

export type ChainRecord = Record<number, Chain>;

/**
 * The currencies record with key as currency id and value as currency
 * along with destination chains corresponding to the currency
 */
export type CurrencyRecordWithChainsType = Record<
  Currency['id'],
  {
    currency: Currency;
    destChainRecord: ChainRecord;
  }
>;

/**
 * The currency balance on different chains
 */
export type CurrencyBalanceRecordType = Record<
  Currency['id'],
  Record<number, number> // chainId -> balance
>;

export interface TransferContainerProps
  extends BridgeTabContainerProps,
    PropsOf<'div'> {}
