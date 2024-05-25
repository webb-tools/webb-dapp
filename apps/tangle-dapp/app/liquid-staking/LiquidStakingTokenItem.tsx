import { ArrowRight } from '@webb-tools/icons';
import { Button, Chip, Typography } from '@webb-tools/webb-ui-components';
import { FC } from 'react';

import { PagePath } from '../../types';
import StatItem from './StatItem';

export type LiquidStakingTokenItemProps = {
  icon: string;
  title: string;
  tokenSymbol: string;
};

const LiquidStakingTokenItem: FC<LiquidStakingTokenItemProps> = ({
  icon,
  title,
  tokenSymbol,
}) => {
  return (
    <div className="flex justify-between rounded-xl dark:bg-mono-160 w-full px-3 py-6">
      <div className="flex gap-2 items-center">
        <div className="rounded-full w-10 h-10 dark:bg-mono-180 border-2 dark:border-purple-80 p-1"></div>

        <Typography variant="body1" fw="normal" className="dark:text-mono-0">
          {title}
        </Typography>

        <Chip className="normal-case" color="dark-grey">
          tg{tokenSymbol.toUpperCase()}
        </Chip>
      </div>

      <div className="flex items-center gap-6">
        <StatItem title="100.00" subtitle="Staked" />

        <StatItem title="5.00 %" subtitle="APY" />

        <StatItem title="20,000.00" subtitle="TVS" />

        <Button
          size="sm"
          variant="utility"
          className="uppercase"
          rightIcon={<ArrowRight className="dark:fill-blue-50" />}
          href={`${PagePath.LIQUID_RESTAKING}/${tokenSymbol}`}
        >
          Stake
        </Button>
      </div>
    </div>
  );
};

export default LiquidStakingTokenItem;
