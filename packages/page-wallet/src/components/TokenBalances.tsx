import { tokenEq, TokenFullName, TokenImage, TokenName, TransferButton } from '@webb-dapp/react-components';
import { useBalance, useConstants, useTranslation } from '@webb-dapp/react-hooks';
import { Condition } from '@webb-dapp/ui-components';
import { BareProps } from '@webb-dapp/ui-components/types';
import { CurrencyId } from '@webb-tools/types/interfaces';
import clsx from 'clsx';
import React, { FC, ReactElement, useMemo } from 'react';

import classes from './TokenBalances.module.scss';
import { isSupportedCurrency } from '@webb-dapp/react-hooks/utils/isSupportedCurrency';

const TotalAsset: FC<BareProps> = ({ className }) => {
  const { t } = useTranslation('page-wallet');

  return (
    <div className={clsx(className, classes.totalAsset)}>
      <p>{t('My Address')}</p>
      {/* <TotalUserAssetValue className={classes.num} /> */}
    </div>
  );
};

interface AssetCardProps extends BareProps {
  currency: CurrencyId;
}

const AssetCard: FC<AssetCardProps> = ({ className, currency }) => {
  const { liquidCurrency } = useConstants();
  const liquidBalance = useBalance(liquidCurrency);

  return (
    <div className={clsx(className, classes.assetCard)}>
      <div className={classes.inner}></div>
      <div className={classes.header}>
        <TokenImage className={classes.tokenImage} currency={currency} />
        <div className={classes.tokenArea}>
          <TokenName className={classes.name} currency={currency} />
          <TokenFullName className={classes.fullname} currency={currency} />
        </div>
        <div className={classes.balanceArea}>
          {/* <UserAssetBalance className={classes.currency} currency={currency} />
          <Condition
            condition={tokenEq(currency, liquidCurrency)}
            or={<UserAssetValue className={classes.amount} currency={currency} />}
          >
            <StakingPoolExchangeRate className={classes.amount} liquidAmount={liquidBalance} showLiquidAmount={false} />
          </Condition> */}
        </div>
      </div>
      <TransferButton className={classes.transferBtn} currency={currency} mode='token' />
    </div>
  );
};

export const TokenBalances: FC = () => {
  const { allCurrencies } = useConstants();
  const supportedCurrencies = useMemo(() => allCurrencies.filter(isSupportedCurrency), [allCurrencies]);

  return (
    <div className={classes.root}>
      <TotalAsset className={classes.item} />
      {supportedCurrencies.map(
        (currency: CurrencyId): ReactElement => (
          <AssetCard className={classes.item} currency={currency} key={`asset-card-${currency.toString()}`} />
        )
      )}
    </div>
  );
};
