// Note that this import is necessary to fix a strange type error
// in Polkadot API's `api.tx.staking.bond` method, which complains
// about requiring three arguments instead of two.

import '@webb-tools/tangle-substrate-types';

export enum PagePath {
  Nomination = '/',
  ClaimAirdrop = '/claim',
  Account = '/account',
  ServicesOverview = '/services',
  ServicesRestake = '/restake',
}

export enum QueryParamKey {
  DelegationsAndPayoutsTab = 'tab',
}

export type QueryParamKeyOf<Page extends PagePath> =
  Page extends PagePath.Nomination
    ? QueryParamKey.DelegationsAndPayoutsTab
    : never;

export type QueryParamValueOf<Key extends QueryParamKey> =
  Key extends QueryParamKey.DelegationsAndPayoutsTab
    ? DelegationsAndPayoutsTab
    : never;

export enum DelegationsAndPayoutsTab {
  Nominations = 'Nominations',
  Payouts = 'Payouts',
}

export type Validator = {
  address: string;
  identity: string;
  selfStaked: string;
  effectiveAmountStaked: string;
  effectiveAmountStakedRaw: string;
  delegations: string;
  commission: string;
  status: string;
};

export type Delegator = {
  address: string;
  identity: string;
  selfStaked: string;
  isActive: boolean;
  commission: string;
  delegations: string;
  effectiveAmountStaked: string;
};

export type NodeSpecification = {
  os: string;
  version: string;
  cpuCores: number;
  memory: number;
  isVirtualMachine: boolean;
  linuxDistribution: string;
  linuxKernel: string;
};

export enum PaymentDestination {
  Staked = 'Staked (increase the amount at stake)',
  Stash = 'Stash (do not increase the amount at stake)',
  Controller = 'Controller Account',
}

export type AddressWithIdentity = {
  address: string;
  identity: string;
};

export type Payout = {
  era: number;
  validator: AddressWithIdentity;
  validatorTotalStake: string;
  nominators: AddressWithIdentity[];
  validatorTotalReward: string;
  nominatorTotalReward: string;
  status: 'claimed' | 'unclaimed';
};

/**
 * Utility type to remove trailing slash from a string.
 *
 * This is useful for constructing query param paths, as the
 * root path (`/`) should not have a trailing slash, but all
 * other paths should.
 */
type RemoveTrailingSlash<T extends string> = T extends `${infer U}/` ? U : T;

/**
 * Utility type to construct a query param path from a page path
 * and query param key/value in a strongly statically typed way.
 */
type SearchQueryPathOf<
  Page extends PagePath,
  Key extends QueryParamKeyOf<Page>,
  Value extends QueryParamValueOf<Key>
> = `${RemoveTrailingSlash<Page>}/?${Key}=${Value}`;

/**
 * Enum-like constant object containing the different paths
 * static search query key & value paths that can be linked to
 * directly.
 *
 * All paths are constructed using the {@link SearchQueryPathOf} utility
 * type, which ensures that the query param key and value are
 * statically typed and match the query param key and value types
 * for the given page.
 *
 * For example, `/account?tab=overview`.
 */
export const StaticSearchQueryPath: {
  NominationsTable: SearchQueryPathOf<
    PagePath.Nomination,
    QueryParamKey.DelegationsAndPayoutsTab,
    DelegationsAndPayoutsTab.Nominations
  >;
  PayoutsTable: SearchQueryPathOf<
    PagePath.Nomination,
    QueryParamKey.DelegationsAndPayoutsTab,
    DelegationsAndPayoutsTab.Payouts
  >;
} = {
  NominationsTable: `${PagePath.Nomination}?${QueryParamKey.DelegationsAndPayoutsTab}=${DelegationsAndPayoutsTab.Nominations}`,
  PayoutsTable: `${PagePath.Nomination}?${QueryParamKey.DelegationsAndPayoutsTab}=${DelegationsAndPayoutsTab.Payouts}`,
} as const;

export type InternalPath =
  | PagePath
  | (typeof StaticSearchQueryPath)[keyof typeof StaticSearchQueryPath];

export enum ServiceType {
  ZK_SAAS_GROTH16 = 'ZkSaaS (Groth16)',
  ZK_SAAS_MARLIN = 'ZkSaaS (Marlin)',
  TX_RELAY = 'Tx Relay',
  DKG_TSS_CGGMP = 'DKG/TSS (CGGMP)',
}

export enum ProfileType {
  INDEPENDENT = 'Independent',
  SHARED = 'Shared',
}

export type Service = {
  id: number;
  serviceType: ServiceType;
  participants: string[];
  thresholds?: number;
  phase2Executions?: number;
  earnings?: number;
  expirationBlock: number;
};

export type ServiceJob = {
  id: string;
  txHash: string;
  timestamp: Date;
};

export type JobType = {
  id?: number;
  serviceType: ServiceType;
  thresholds?: number;
  earnings?: number;
  expiration: number;
};

export type ServiceParticipant = {
  address: string;
  identity?: string;
  twitter?: string;
  discord?: string;
  email?: string;
  web?: string;
};
