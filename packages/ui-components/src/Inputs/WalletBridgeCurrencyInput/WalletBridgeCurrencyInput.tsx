import { BridgeCurrency } from '@webb-dapp/apps/configs';
import { useBridge } from '@webb-dapp/bridge/hooks/bridge/use-bridge';
import { useWebContext } from '@webb-dapp/react-environment';
import { Currency, CurrencyContent, CurrencyView } from '@webb-dapp/react-environment/types/currency';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { InputLabel } from '../InputLabel/InputLabel';
import { InputSection } from '../InputSection/InputSection';
import { TokenInput } from '../TokenInput/TokenInput';
import { WalletSelect } from '../WalletSelect/WalletSelect';

const WalletTokenInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

type WalletTokenInputProps = {
  setSelectedToken(token: BridgeCurrency): void;
  selectedToken: BridgeCurrency | undefined;
};
const WrappedIcon = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        color: 'blue',
      }}
    >
      🕸
    </div>
  );
};
export const fromBridgeCurrencyToCurrencyView = (bridgeCurrency: BridgeCurrency): CurrencyContent => {
  console.log('detected currencyId: ', bridgeCurrency.currencyIds[0]);
  const wrappedCurrency = Currency.fromCurrencyId(bridgeCurrency.currencyIds[0]);
  const view = wrappedCurrency.view;
  return {
    get view(): CurrencyView {
      return {
        ...view,
        icon: (
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <WrappedIcon />
            {view.icon}
          </div>
        ),
        id: bridgeCurrency.toString(),
        name: bridgeCurrency.name,
        symbol: bridgeCurrency.name,
      };
    },
  };
};
export const WalletBridgeCurrencyInput: React.FC<WalletTokenInputProps> = ({ selectedToken, setSelectedToken }) => {
  const { activeChain, activeWallet } = useWebContext();
  const { getTokens, getTokensOfChain } = useBridge();
  const allCurrencies = useMemo(() => {
    if (activeChain) {
      return getTokensOfChain(activeChain.id).map((token) => fromBridgeCurrencyToCurrencyView(token));
    }
    return getTokens().map((token) => fromBridgeCurrencyToCurrencyView(token));
  }, [activeChain, getTokens, getTokensOfChain]);
  const selectedCurrency = useMemo(() => {
    if (!selectedToken) {
      return undefined;
    }
    return fromBridgeCurrencyToCurrencyView(selectedToken);
  }, [selectedToken]);
  return (
    <InputSection>
      <WalletTokenInputWrapper>
        <InputLabel label={'Select Wallet'}>
          <WalletSelect />
        </InputLabel>

        {activeWallet && (
          <InputLabel label={'Select Token'}>
            {/* used for positioning the token input label */}
            <div style={{ height: '52px' }}></div>
            <TokenInput
              currencies={allCurrencies}
              value={selectedCurrency}
              onChange={(currencyContent) => {
                if (currencyContent) {
                  // TODO validate the id is BridgeCurrency id not WebbCurrencyId
                  setSelectedToken(BridgeCurrency.fromString(currencyContent.view.id as string));
                }
              }}
            />
          </InputLabel>
        )}
      </WalletTokenInputWrapper>
    </InputSection>
  );
};
