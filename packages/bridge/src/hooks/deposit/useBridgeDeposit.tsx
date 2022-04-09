import { useBridge } from '@webb-dapp/bridge/hooks/bridge/use-bridge';
import { useWebContext } from '@webb-dapp/react-environment';
import {
  AnchorDeposit,
  BridgeCurrencyIndex,
  ChainTypeId,
  computeChainIdType,
  Currency,
  DepositPayload,
  MixerDeposit,
  MixerSize,
} from '@webb-tools/api-providers';
import { LoggerService } from '@webb-tools/app-util';
import { useCallback, useEffect, useMemo, useState } from 'react';

const logger = LoggerService.get('useBridgeDeposit');

export interface BridgeDepositApi {
  mixerSizes: MixerSize[];

  deposit(payload: DepositPayload): Promise<void>;

  generateNote(
    mixerId: number | string,
    destChain: ChainTypeId,
    wrappableAsset: string | undefined
  ): Promise<DepositPayload>;

  loadingState: MixerDeposit['loading'];
  error: string;
  depositApi: AnchorDeposit<any> | null;
  selectedBridgeCurrency: Currency | null;

  setSelectedCurrency(bridgeCurrency: BridgeCurrencyIndex | undefined): void;
}

export const useBridgeDeposit = (): BridgeDepositApi => {
  const { activeApi } = useWebContext();
  const [loadingState, setLoadingState] = useState<AnchorDeposit<any>['loading']>('ideal');
  const [error, setError] = useState('');
  const [mixerSizes, setMixerSizes] = useState<MixerSize[]>([]);
  const { bridgeApi, getTokensOfChain } = useBridge();
  const [selectedBridgeCurrency, setSelectedBridgeCurrency] = useState<null | Currency>(null);
  /// api
  const depositApi = useMemo(() => {
    const depositApi = activeApi?.methods.anchor.deposit;
    if (!depositApi?.enabled) {
      return null;
    }
    return depositApi.inner;
  }, [activeApi]);

  // hook events
  useEffect(() => {
    if (!depositApi || !bridgeApi) {
      return;
    }
    const unSub = depositApi.on('error', (error) => {
      setError(error);
    });

    depositApi.getSizes().then((mixerSizes) => {
      setMixerSizes(mixerSizes);
    });
    setSelectedBridgeCurrency(bridgeApi.currency);
    const subscribe = bridgeApi.$store.subscribe((bridge) => {
      depositApi.getSizes().then((mixerSizes) => {
        setMixerSizes(mixerSizes);
      });
      console.log(bridgeApi.currency);
      setSelectedBridgeCurrency(bridgeApi.currency);
    });
    return () => {
      unSub && unSub();
      subscribe.unsubscribe();
    };
  }, [depositApi, bridgeApi]);

  const generateNote = useCallback(
    async (mixerId: number | string, destChainTypeId: ChainTypeId, wrappableAsset: string | undefined) => {
      if (!depositApi) {
        throw new Error('Not ready');
      }
      const destChainId = computeChainIdType(destChainTypeId.chainType, destChainTypeId.chainId);
      return depositApi?.generateBridgeNote(mixerId, destChainId, wrappableAsset);
    },
    [depositApi]
  );

  const deposit = useCallback(
    async (depositPayload: DepositPayload) => {
      return depositApi?.deposit(depositPayload);
    },
    [depositApi]
  );

  const setSelectedCurrency = (bridgeCurrency: BridgeCurrencyIndex | undefined) => {
    const activeBridgeApi = bridgeApi;
    if (activeBridgeApi) {
      if (bridgeCurrency) {
        const nextBridge = activeBridgeApi.store.config[bridgeCurrency] || undefined;
        activeBridgeApi.setActiveBridge(nextBridge);
      } else {
        activeBridgeApi.setActiveBridge(undefined);
      }
    }
  };

  return {
    depositApi,
    mixerSizes,
    deposit,
    generateNote,
    loadingState,
    error,
    selectedBridgeCurrency,
    setSelectedCurrency,
  };
};
