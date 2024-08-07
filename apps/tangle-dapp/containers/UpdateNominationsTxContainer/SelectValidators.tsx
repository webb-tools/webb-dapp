import { Alert } from '@webb-tools/webb-ui-components';
import React, { Dispatch, type FC, SetStateAction } from 'react';

import ValidatorSelectionTable from '../../components/ValidatorSelectionTable/ValidatorSelectionTable';
import useAllValidators from '../../data/ValidatorTables/useAllValidators';

export type SelectValidatorsProps = {
  defaultSelectedValidators?: string[];
  setSelectedValidators: Dispatch<SetStateAction<Set<string>>>;
};

const SelectValidators: FC<SelectValidatorsProps> = ({
  defaultSelectedValidators = [],
  setSelectedValidators,
}) => {
  const { validators, isLoading } = useAllValidators();

  return (
    <div className="flex flex-col col-span-2 gap-2">
      <ValidatorSelectionTable
        defaultSelectedValidators={defaultSelectedValidators}
        allValidators={validators}
        setSelectedValidators={setSelectedValidators}
        isLoading={isLoading}
      />

      <Alert
        description="Submitting a new nomination will overwrite any existing nomination."
        type="info"
      />
    </div>
  );
};

export default React.memo(SelectValidators);
