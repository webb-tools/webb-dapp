'use client';

import {
  getRoundedAmountString,
  Typography,
} from '@webb-tools/webb-ui-components';
import { FC } from 'react';
import { Cell, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import { twMerge } from 'tailwind-merge';

import useNetworkStore from '../../context/useNetworkStore';
import type { PieChartProps } from './types';

const SharedRoleDistributionChart: FC<PieChartProps> = ({
  data,
  title = 'Shared',
}) => {
  const { nativeTokenSymbol } = useNetworkStore();

  return (
    <div className="relative">
      <RadialBarChart
        innerRadius={55}
        outerRadius={100}
        width={200}
        height={200}
        data={data}
      >
        <RadialBar dataKey="value">
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.color} />
          ))}
        </RadialBar>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return <TooltipContent name={payload[0].payload.name} />;
            }
          }}
          wrapperStyle={{ zIndex: 100 }}
        />
      </RadialBarChart>

      <div
        className={twMerge(
          'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
          'flex flex-col items-center gap-1'
        )}
      >
        <Typography variant="body2">{title}</Typography>
        <Typography
          variant="body1"
          fw="bold"
          className="text-mono-200 dark:text-mono-0"
        >
          {/* In Shared Profile, all roles share the same value */}
          {getRoundedAmountString(data[0].value)} {nativeTokenSymbol}
        </Typography>
      </div>
    </div>
  );
};

export default SharedRoleDistributionChart;

/** @internal */
const TooltipContent: FC<{
  name: string;
}> = ({ name }) => {
  return (
    <div className="px-4 py-2 rounded-lg bg-mono-0 dark:bg-mono-180 text-mono-120 dark:text-mono-80">
      <Typography variant="body2" fw="semibold" className="whitespace-nowrap">
        {name}
      </Typography>
    </div>
  );
};
