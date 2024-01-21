export type SWRConfigConst = Readonly<{
  cacheUniqueKey: string;
  refreshInterval: number;
}>;

export const SWR_ERA: SWRConfigConst = {
  cacheUniqueKey: 'era',
  // 1 hour.
  refreshInterval: 60 * 1000 * 60,
};

export const SWR_STAKING_REWARDS: SWRConfigConst = {
  cacheUniqueKey: 'staking-rewards',
  // 3 minutes.
  refreshInterval: 3 * 1000 * 60,
};