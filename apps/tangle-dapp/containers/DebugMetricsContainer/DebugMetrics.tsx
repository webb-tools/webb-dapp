'use client';

import { Expand } from '@webb-tools/icons';
import { SkeletonLoader, Typography } from '@webb-tools/webb-ui-components';
import { FC, useCallback, useEffect, useState } from 'react';

import useDebugMetricsStore from '../../context/useDebugMetricsStore';
import useNetworkStore from '../../context/useNetworkStore';
import usePromise from '../../hooks/usePromise';
import { getApiPromise, getApiRx } from '../../utils/polkadot';

/**
 * Format bytes to megabytes, rounded to two decimal places
 * and suffixed with `mb`.
 */
function formatBytes(bytes: number): string {
  // The multiplier to convert bytes to megabytes.
  const MEGABYTE_FACTOR = 0.000001;

  return Math.round(bytes * MEGABYTE_FACTOR * 100) / 100 + 'mb';
}

const DebugMetrics: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { rpcEndpoint } = useNetworkStore();
  const { requestCount, subscriptionCount } = useDebugMetricsStore();

  const { result: api } = usePromise(
    useCallback(() => getApiPromise(rpcEndpoint), [rpcEndpoint]),
    null,
  );

  const { result: apiRx } = usePromise(
    useCallback(() => getApiRx(rpcEndpoint), [rpcEndpoint]),
    null,
  );

  const isApiLoading = api === null || apiRx === null;
  const [tick, setTick] = useState(0);

  const totalRequests =
    (api?.stats?.total.requests ?? 0) +
    (apiRx?.stats?.total.requests ?? 0) +
    requestCount;

  const totalBytesReceived =
    (api?.stats?.total.bytesRecv ?? 0) + (apiRx?.stats?.total.bytesRecv ?? 0);

  const totalBytesSent =
    (api?.stats?.total.bytesSent ?? 0) + (apiRx?.stats?.total.bytesSent ?? 0);

  const totalErrors =
    (api?.stats?.total.errors ?? 0) + (apiRx?.stats?.total.errors ?? 0);

  const totalActiveSubscriptions =
    (api?.stats?.active.subscriptions ?? 0) +
    (apiRx?.stats?.active.subscriptions ?? 0) +
    subscriptionCount;

  // Manually trigger a re-render every second, since the stats
  // are not automatically updated.
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prevTick) => prevTick + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [tick]);

  const stats = (
    <>
      <Metric
        title="Requests"
        value={totalRequests}
        warnAt={100}
        isApiLoading={isApiLoading}
      />

      <Metric
        title="Subscriptions"
        value={`${totalActiveSubscriptions} active`}
        isApiLoading={isApiLoading}
      />

      <Metric
        title="Data usage"
        value={`${formatBytes(totalBytesReceived)} in, ${formatBytes(totalBytesSent)} out`}
        isApiLoading={isApiLoading}
      />

      <Metric
        title="Errors"
        value={totalErrors}
        warnAt={1}
        isApiLoading={isApiLoading}
      />
    </>
  );

  return (
    <div
      className="cursor-pointer fixed left-3 bottom-3 z-10 bg-mono-20 dark:bg-mono-180 border border-mono-140 rounded-md shadow-md px-4 py-2 transition-opacity opacity-50 hover:opacity-100 flex flex-row gap-4 max-w-lg overflow-x-auto"
      onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
    >
      {isCollapsed ? (
        <div>
          <Expand size="lg" />
        </div>
      ) : (
        stats
      )}
    </div>
  );
};

/** @internal */
const Metric: FC<{
  title: string;
  value: string | number;
  isApiLoading: boolean;
  warnAt?: number;
}> = ({ title, value, warnAt, isApiLoading }) => {
  const warnAfterClassName =
    warnAt !== undefined && typeof value === 'number' && value >= warnAt
      ? 'dark:text-red-40'
      : '';

  return (
    <div className="flex flex-col w-max whitespace-nowrap">
      <Typography variant="body1" className="whitespace-nowrap">
        {title}
      </Typography>

      {isApiLoading ? (
        <SkeletonLoader />
      ) : (
        <Typography variant="h5" className={warnAfterClassName}>
          {value}
        </Typography>
      )}
    </div>
  );
};

export default DebugMetrics;
