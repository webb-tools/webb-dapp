import { BN } from '@polkadot/util';
import { InformationLine } from '@webb-tools/icons';
import { Chip, Typography } from '@webb-tools/webb-ui-components';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { ServiceType } from '../../types';
import getChipColorByServiceType from '../../utils/getChipColorByServiceType';
import { formatTokenBalance } from '../../utils/polkadot';
import { filterAllocations } from './IndependentAllocationStep';
import { RestakingProfileType } from './ManageProfileModalContainer';
import { RestakingAllocationMap } from './types';

export type ConfirmAllocationsStepProps = {
  profileType: RestakingProfileType;
  allocations: RestakingAllocationMap;
  sharedRestakedAmount?: BN;
};

const ConfirmAllocationsStep: FC<ConfirmAllocationsStepProps> = ({
  profileType,
  allocations,
  sharedRestakedAmount,
}) => {
  const restakedAmount = filterAllocations(allocations).reduce(
    (acc, [, amount]) => acc.add(amount),
    new BN(0)
  );

  const filteredAllocations = filterAllocations(allocations);

  const cardBaseClassName =
    'flex flex-col gap-2 bg-mono-20 dark:bg-mono-160 rounded-lg w-full p-4 border border-mono-40 dark:border-mono-140';

  // Give priority to the shared restaked amount, if provided.
  // This is because the shared restake amount is not automatically
  // calculated from the allocations, since shared roles profiles
  // do not allocate amounts per-role, but rather as a whole.
  const totalRestakedAmount = formatTokenBalance(
    sharedRestakedAmount !== undefined ? sharedRestakedAmount : restakedAmount
  );

  return (
    <div className="flex flex-col sm:flex-row items-start gap-2 w-full">
      <div className={cardBaseClassName}>
        <div className="flex justify-between">
          <Typography variant="body2" fw="semibold">
            Profile Type
          </Typography>

          <Chip color="dark-grey">
            {profileType === RestakingProfileType.INDEPENDENT
              ? 'Independent'
              : 'Shared'}
          </Chip>
        </div>

        <div className="flex flex-col gap-2 mb-auto">
          {filteredAllocations.map(([service, amount]) => (
            <AllocationItem key={service} service={service} amount={amount} />
          ))}

          {filteredAllocations.length === 0 && (
            <Typography
              variant="body2"
              fw="normal"
              className="w-full text-center bg-mono-40 dark:bg-mono-140 rounded-lg px-3 py-2"
            >
              No allocations
            </Typography>
          )}
        </div>

        <div className="flex justify-between">
          <Typography variant="body2" fw="semibold">
            Total Restake Amount
          </Typography>

          <Typography
            variant="body2"
            fw="semibold"
            className="dark:text-mono-0"
          >
            {totalRestakedAmount}
          </Typography>
        </div>
      </div>

      <div className={twMerge(cardBaseClassName, 'dark:text-mono-0')}>
        <div className="flex justify-between">
          <Typography
            variant="body2"
            fw="semibold"
            className="text-inherit dark:text-inherit"
          >
            Things to Note
          </Typography>

          <InformationLine />
        </div>

        <div>
          <Typography
            variant="body3"
            fw="normal"
            className="text-inherit dark:text-inherit"
          >
            Active Service Lock-In:
          </Typography>

          <ul className="list-disc pl-2">
            <li className="ml-4 list-outside">
              <Typography
                variant="body3"
                fw="normal"
                className="text-inherit dark:text-inherit"
              >
                Restaked tokens in active roles are locked for the duration of
                the service. Active roles can only have increased restakes.
              </Typography>
            </li>
          </ul>
        </div>

        <div>
          <Typography
            variant="body3"
            fw="normal"
            className="text-inherit dark:text-inherit"
          >
            Switching to Shared Profile:
          </Typography>

          <ul className="list-disc pl-2">
            <li className="ml-4 list-outside">
              <Typography
                variant="body3"
                fw="normal"
                className="text-inherit dark:text-inherit"
              >
                Shared profile requires even distribution of total restake
                across all roles. Total shared restake must be at least equal to
                current total for active roles.
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

type AllocationItemProps = {
  service: ServiceType;
  amount: BN;
};

/** @internal */
const AllocationItem: FC<AllocationItemProps> = ({ service, amount }) => {
  return (
    <div className="flex items-center justify-between bg-mono-40 dark:bg-mono-140 rounded-lg px-3 py-2">
      <Chip color={getChipColorByServiceType(service)}>{service}</Chip>

      <Typography variant="body2" fw="semibold" className="dark:text-mono-0">
        {formatTokenBalance(amount)}
      </Typography>
    </div>
  );
};

export default ConfirmAllocationsStep;
