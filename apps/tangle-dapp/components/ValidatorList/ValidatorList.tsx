'use client';

import { CloseCircleLineIcon, Search } from '@webb-tools/icons';
import {
  Avatar,
  CheckBox,
  Chip,
  CopyWithTooltip,
  Input,
  shortenString,
  Typography,
} from '@webb-tools/webb-ui-components';
import React, { useState } from 'react';

import { Validator } from '../../types';
import {
  SortableValidatorKeys,
  SortButtonProps,
  ValidatorListProps,
} from './types';

const sortValidators = (
  validators: Validator[],
  sortKey: keyof SortableValidatorKeys
) => {
  return validators.sort((a, b) => {
    const valueA = parseInt(a[sortKey], 10);
    const valueB = parseInt(b[sortKey], 10);
    return valueB - valueA;
  });
};

export const ValidatorList = ({
  validators,
  selectedValidators,
  setSelectedValidators,
  sortBy,
}: ValidatorListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSort, setSelectedSort] =
    useState<keyof SortableValidatorKeys>();

  let sortedValidators = [...validators];

  if (selectedSort) {
    sortedValidators = sortValidators(sortedValidators, selectedSort);
  } else {
    sortedValidators.sort((a, b) => {
      const aSelected = selectedValidators.includes(a.address);
      const bSelected = selectedValidators.includes(b.address);
      return aSelected === bSelected ? 0 : aSelected ? -1 : 1;
    });
  }

  const filteredValidators = sortedValidators.filter(
    (validator) =>
      validator.identityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      validator.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validatorElements = filteredValidators.map((validator) => {
    const isSelected = selectedValidators.includes(validator.address);
    return (
      <div
        key={validator.address}
        className="flex !items-center !justify-between"
      >
        <div className="flex !items-center gap-1">
          <CheckBox
            isChecked={isSelected}
            onChange={() => {
              if (isSelected) {
                setSelectedValidators(
                  selectedValidators.filter(
                    (selectedValidator) =>
                      selectedValidator !== validator.address
                  )
                );
              } else {
                setSelectedValidators([
                  ...selectedValidators,
                  validator.address,
                ]);
              }
            }}
          />
          <Avatar value={validator.address} theme="substrate" />
          <Typography variant="h5" fw="bold">
            {validator.identityName !== ''
              ? shortenString(validator.identityName, 8)
              : shortenString(validator.address, 8)}
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <Chip color="blue">{validator.effectiveAmountStaked}</Chip>
          <Chip color="blue">{validator.delegations}</Chip>
          <Chip color="blue">{validator.commission}%</Chip>
          <Chip color={validator.status === 'Active' ? 'green' : 'yellow'}>
            {validator.status}
          </Chip>
          <CopyWithTooltip
            textToCopy={validator.address}
            isButton={false}
            className="cursor-pointer"
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <Input
        id="token"
        rightIcon={<Search />}
        placeholder="Search validators..."
        value={searchTerm}
        onChange={(val) => setSearchTerm(val)}
        className="mb-1"
      />

      <div className="flex gap-3 items-center my-4">
        <Typography
          variant="body1"
          fw="normal"
          className="text-mono-200 dark:text-mono-0"
        >
          Sort by :
        </Typography>

        <div className="flex gap-2 items-center">
          {sortBy.map((sortButton) => (
            <SortButton
              key={sortButton.key}
              title={sortButton.title}
              isSelected={selectedSort === sortButton.key}
              onClick={() => {
                if (selectedSort === sortButton.key) {
                  setSelectedSort(undefined);
                } else {
                  setSelectedSort(sortButton.key);
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="max-h-[348px] overflow-scroll flex flex-col gap-2 p-3 border dark:border-mono-160 col-span-2">
          {validatorElements}
        </div>

        <div className="flex flex-col gap-5 col-span-1">
          <Typography variant="body1" fw="normal">
            Validators can be nominated from the list of all currently available
            validators. You should nominate validators you trust. Nominators are
            slashed when their nominated validators misbehave.
          </Typography>

          <Typography variant="body1" fw="normal">
            Once submitted, the new selection will only take effect in 2 eras
            from the next validator election cycle. Until then, the nominations
            will appear inactive.
          </Typography>

          <Typography variant="body1" fw="normal">
            Submitting a new nomination will overwrite any existing nomination.
          </Typography>
        </div>
      </div>
    </div>
  );
};

const SortButton = ({
  title,
  isSelected,
  onClick: setIsSelected,
}: SortButtonProps) => {
  return (
    <Chip
      onClick={() => setIsSelected()}
      color={isSelected ? 'blue' : 'grey'}
      isSelected
      className="cursor-pointer"
    >
      {title}
      {isSelected && (
        <CloseCircleLineIcon
          className="stroke-blue-90 fill-blue-90 dark:fill-blue-30 dark:stroke-blue-30"
          size="md"
        />
      )}
    </Chip>
  );
};
