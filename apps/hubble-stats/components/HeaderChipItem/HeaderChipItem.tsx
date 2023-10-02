import { Suspense, type FC, useMemo } from 'react';
import {
  Chip,
  Tooltip,
  TooltipBody,
  TooltipTrigger,
  Typography,
  SkeletonLoader,
} from '@webb-tools/webb-ui-components';

import { HeaderChipItemProps } from './types';
import { getRoundedDownNumberWith2Decimals } from '../../utils';

const HeaderChipItem: FC<HeaderChipItemProps> = ({
  Icon,
  label,
  hasTooltip = false,
  tooltipContent,
  dataFetcher,
}: HeaderChipItemProps) => {
  const mainContent = useMemo(
    () => (
      <Chip color="blue" className="normal-case whitespace-nowrap">
        <Icon size="lg" className="fill-blue-90 dark:fill-blue-30" />
        {label}:{' '}
        <Suspense fallback={<SkeletonLoader className="w-[100px]" />}>
          <HeaderChipItemValue dataFetcher={dataFetcher} />
        </Suspense>
      </Chip>
    ),
    [Icon, label, dataFetcher]
  );

  if (hasTooltip && tooltipContent) {
    return (
      <Tooltip>
        <TooltipTrigger>{mainContent}</TooltipTrigger>
        <TooltipBody>
          <Typography variant="body2">{tooltipContent}</Typography>
        </TooltipBody>
      </Tooltip>
    );
  }

  return mainContent;
};

export default HeaderChipItem;

const HeaderChipItemValue = async ({
  dataFetcher,
}: Pick<HeaderChipItemProps, 'dataFetcher'>) => {
  const value = await dataFetcher();

  return (
    <>
      {typeof value === 'number'
        ? getRoundedDownNumberWith2Decimals(value)
        : '-'}{' '}
      webbtTNT
    </>
  );
};
