import { DepositPayload, MixerDeposit, MixerSize, useWebContext } from '@webb-dapp/react-environment/webb-context';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface DepositApi {
  mixerSizes: MixerSize[];

  deposit(payload: DepositPayload): Promise<void>;

  generateNote(mixer: number | string, chainId?: number): Promise<DepositPayload>;

  loadingState: MixerDeposit['loading'];
  error: string;
  ready: boolean;
}

export const useDeposit = (): DepositApi => {
  const { activeApi } = useWebContext();
  const [loadingState, setLoadingState] = useState<MixerDeposit['loading']>('ideal');
  const [error, setError] = useState('');
  const [mixerSizes, setMixerSizes] = useState<MixerSize[]>([]);

  /// api
  const depositApi = useMemo(() => {
    const depositApi = activeApi?.methods.mixer.deposit;
    if (!depositApi?.enabled) {
      return null;
    }
    return depositApi.inner;
  }, [activeApi]);

  // hook events
  useEffect(() => {
    if (!depositApi) {
      return;
    }
    const unSub = depositApi.on('error', (error) => {
      setError(error);
    });
    depositApi.getSizes().then((mixerSizes) => {
      setMixerSizes(mixerSizes);
    });
    return () => unSub && unSub();
  }, [depositApi]);

  const generateNote = useCallback(
    async (mixerId: number, chainId?: number) => {
      if (!depositApi) {
        // TODO: fix this to be dependent ont he api state
        // disable buttons
        throw new Error('Not ready');
      } else {
        return depositApi?.generateNote(mixerId, chainId);
      }
    },
    [depositApi]
  );

  const deposit = useCallback(
    async (depositPayload: DepositPayload) => {
      return depositApi?.deposit(depositPayload);
    },
    [depositApi]
  );
  return {
    mixerSizes,
    deposit,
    generateNote,
    loadingState,
    error,
    ready: Boolean(activeApi),
  };
};
