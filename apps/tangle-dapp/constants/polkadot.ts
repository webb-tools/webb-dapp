import { ApiPromise, ApiRx, WsProvider } from '@polkadot/api';
import { BN, formatBalance } from '@polkadot/util';
import { TANGLE_RPC_ENDPOINT as TESTNET_RPC_ENDPOINT } from '@webb-tools/webb-ui-components/constants';
import { firstValueFrom } from 'rxjs';

export const TOKEN_UNIT = 'tTNT';

const TANGLE_RPC_ENDPOINT = process.env['USING_LOCAL_TANGLE']
  ? 'ws://127.0.0.1:9944'
  : TESTNET_RPC_ENDPOINT;

const apiPromiseCache = new Map<string, Promise<ApiPromise>>();

async function getOrCacheApiVariant<T>(
  endpoint: string,
  cache: Map<string, Promise<T>>,
  factory: () => Promise<T>
): Promise<T> {
  const possiblyCachedInstance = cache.get(endpoint);

  if (possiblyCachedInstance !== undefined) {
    return possiblyCachedInstance;
  }

  // Immediately cache the promise to prevent data races
  // that would result in multiple API instances being created.
  const newInstance = factory();

  cache.set(endpoint, newInstance);

  return newInstance;
}

export const getPolkadotApiPromise: (
  endpoint?: string
) => Promise<ApiPromise> = async (endpoint: string = TANGLE_RPC_ENDPOINT) => {
  return getOrCacheApiVariant(endpoint, apiPromiseCache, async () => {
    const wsProvider = new WsProvider(endpoint);

    return ApiPromise.create({
      provider: wsProvider,
      noInitWarn: true,
    });
  });
};

const apiRxCache = new Map<string, Promise<ApiRx>>();

export const getPolkadotApiRx = async (
  endpoint: string = TANGLE_RPC_ENDPOINT
): Promise<ApiRx> => {
  return getOrCacheApiVariant(endpoint, apiRxCache, async () => {
    const provider = new WsProvider(endpoint);
    const api = new ApiRx({ provider, noInitWarn: true });

    return firstValueFrom(api.isReady);
  });
};

export const formatTokenBalance = async (
  balance: BN,
  includeUnit = true
): Promise<string> => {
  const api = await getPolkadotApiPromise();

  // Use 18 as default decimals as a fallback.
  const decimals = api.registry.chainDecimals[0] || 18;

  return formatBalance(balance, {
    decimals,
    withUnit: includeUnit ? TOKEN_UNIT : false,
  });
};

export const getTotalNumberOfNominators = async (
  validatorAddress: string
): Promise<number | undefined> => {
  const api = await getPolkadotApiPromise();
  const nominators = await api.query.staking.nominators.entries();
  const totalNominators = nominators.filter(([, nominatorData]) => {
    const nominations = nominatorData.unwrapOrDefault();
    return (
      nominations.targets &&
      nominations.targets.some(
        (target) => target.toString() === validatorAddress
      )
    );
  });
  const delegations = totalNominators.length.toString();

  return Number(delegations);
};

export const getValidatorIdentity = async (
  validatorAddress: string
): Promise<string | undefined> => {
  const api = await getPolkadotApiPromise();

  const identityOption = await api.query.identity.identityOf(validatorAddress);

  let name = '';

  if (identityOption.isSome) {
    const { info } = identityOption.unwrap();
    const displayNameInfo = info.display.toString();
    const displayNameObject = JSON.parse(displayNameInfo);

    if (displayNameObject.raw) {
      const hexString = displayNameObject.raw;
      name = Buffer.from(hexString.slice(2), 'hex').toString('utf8');
    }
  } else {
    name = validatorAddress;
  }

  return name;
};

export const isNominatorAlreadyBonded = async (
  nominatorAddress: string
): Promise<boolean> => {
  const api = await getPolkadotApiPromise();

  const isBondedInfo = await api.query.staking.bonded(nominatorAddress);

  return isBondedInfo.isSome;
};

export const isNominatorFirstTimeNominator = async (
  nominatorAddress: string
): Promise<boolean> => {
  const api = await getPolkadotApiPromise();

  const isAlreadyBonded = await isNominatorAlreadyBonded(nominatorAddress);
  const nominatedValidators = await api.query.staking.nominators(
    nominatorAddress
  );

  return !isAlreadyBonded && !nominatedValidators.isSome;
};

export const getValidatorCommission = async (
  validatorAddress: string
): Promise<string | undefined> => {
  const api = await getPolkadotApiPromise();
  const validatorPrefs = await api.query.staking.validators(validatorAddress);
  const commissionRate = validatorPrefs.commission.unwrap().toNumber();
  const commission = commissionRate / 10000000;

  return commission.toString();
};

export const getMaxNominationQuota = async (): Promise<number | undefined> => {
  const api = await getPolkadotApiPromise();
  const maxNominations = await api.consts.staking.maxNominations?.toNumber();

  return maxNominations;
};

export const getSlashingSpans = async (
  address: string
): Promise<string | undefined> => {
  const api = await getPolkadotApiPromise();
  const slashingSpans = await api.query.staking.slashingSpans(address);

  return slashingSpans.toString();
};
