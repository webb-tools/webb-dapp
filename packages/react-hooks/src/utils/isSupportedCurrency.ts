import { CurrencyId } from '@drewstone/types/interfaces/types';

export const isSupportedCurrency = (currency: CurrencyId): boolean => {
  // @ts-ignore
  return currency.toHuman()?.Token == 'EDG';
};
