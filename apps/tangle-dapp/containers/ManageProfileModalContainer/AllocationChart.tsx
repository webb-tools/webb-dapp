import { BN } from '@polkadot/util';
import { Typography, useNextDarkMode } from '@webb-tools/webb-ui-components';
import { FC } from 'react';
import { Cell, Pie, PieChart, Tooltip as RechartsTooltip } from 'recharts';

import BnChartTooltip from '../../components/BnChartTooltip';
import { ChartColor, TANGLE_TOKEN_UNIT } from '../../constants';
import useMaxRestakingAmount from '../../data/restaking/useMaxRestakingAmount';
import { ServiceType } from '../../types';
import { formatTokenBalance } from '../../utils/polkadot';
import { RestakingAllocationMap } from './types';

export type AllocationChartProps = {
  allocations: RestakingAllocationMap;
  data: AllocationDataEntry[];
  allocatedAmount: BN;
};

type EntryName = 'Remaining' | ServiceType;

export type AllocationDataEntry = {
  name: EntryName;
  value: number;
};

function getChartColor(entryName: EntryName): ChartColor {
  switch (entryName) {
    case 'Remaining':
      return ChartColor.DarkGray;
    default:
      return getServiceChartColor(entryName);
  }
}

export function getServiceChartColor(service: ServiceType): ChartColor {
  switch (service) {
    case ServiceType.ZK_SAAS_MARLIN:
    case ServiceType.ZK_SAAS_GROTH16:
      return ChartColor.Blue;
    case ServiceType.DKG_TSS_CGGMP:
      return ChartColor.Lavender;
    case ServiceType.TX_RELAY:
      return ChartColor.Green;
  }
}

const AllocationChart: FC<AllocationChartProps> = ({
  data,
  allocatedAmount,
  allocations,
}) => {
  const [isDarkMode] = useNextDarkMode();

  const themeCellColor: ChartColor = isDarkMode
    ? ChartColor.DarkGray
    : ChartColor.Gray;

  const maxRestakingAmount = useMaxRestakingAmount();

  return (
    <div className="relative flex items-center justify-center w-full">
      <PieChart width={190} height={190}>
        <Pie
          data={data}
          innerRadius={65}
          outerRadius={95}
          stroke="none"
          dataKey="value"
          paddingAngle={5}
          animationDuration={200}
        >
          <Cell key="Remaining" fill={themeCellColor} />

          {allocationDataEntries.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getChartColor(entry.name)} />
          ))}
        </Pie>

        <RechartsTooltip
          content={BnChartTooltip(
            allocations,
            maxRestakingAmount ?? new BN(0),
            allocatedAmount
          )}
        />
      </PieChart>

      <div className="absolute center flex flex-col justify-center items-center z-[-1]">
        <Typography variant="body2" fw="normal" className="dark:text-mono-120">
          Restaked
        </Typography>

        <Typography
          variant="h5"
          fw="bold"
          className="dark:text-mono-0 text-center"
        >
          {formatTokenBalance(allocatedAmount, false)}
        </Typography>

        <Typography variant="body2" className="dark:text-mono-120">
          {TANGLE_TOKEN_UNIT}
        </Typography>
      </div>
    </div>
  );
};

export default AllocationChart;
