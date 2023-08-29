import { FC } from 'react';
import cx from 'classnames';
import { Typography } from '@webb-tools/webb-ui-components';
import { getRoundedAmountString } from '@webb-tools/webb-ui-components/utils';
import { ArrowRight } from '@webb-tools/icons';

import { PoolOverviewItemProps } from './types';

const PoolOverviewItem: FC<PoolOverviewItemProps> = ({
  title,
  value,
  changeRate,
  prefix = '',
  suffix = '',
  className,
}) => {
  return (
    <div className={cx('px-2', className)}>
      <div className="flex justify-center items-center gap-1">
        <Typography variant="h5" fw="black" className="text-center">
          {typeof value === 'number' && prefix}
          {getRoundedAmountString(value, 1, {
            roundingFunction: Math.floor,
            totalLength: 0,
          })}
          {typeof value === 'number' && suffix}
        </Typography>
        {changeRate && (
          <Typography
            variant="utility"
            tw="black"
            className={cx(
              'flex items-center',
              'uppercase text-mono-120 dark:text-mono-80 !text-[12px]',
              {
                '!text-green-70': changeRate >= 0,
                '!text-red-70': changeRate < 0,
              }
            )}
          >
            <ArrowRight
              className={cx({
                '-rotate-90 !fill-green-70': changeRate >= 0,
                'rotate-90 !fill-red-70': changeRate < 0,
              })}
            />
            {getRoundedAmountString(Math.abs(changeRate), 1)}%
          </Typography>
        )}
      </div>

      <Typography
        variant="utility"
        tw="black"
        className={cx(
          'w-full uppercase block text-center !text-[10px] md:!text-[12px]',
          'text-mono-120 dark:text-mono-80'
        )}
      >
        {title}
      </Typography>
    </div>
  );
};

export default PoolOverviewItem;
