import { useCallback } from 'react';

import useEntryMap from '../../hooks/useEntryMap';
import usePolkadotApiRx from '../../hooks/usePolkadotApiRx';

const useValidatorPrefs = () => {
  const { data: validatorPrefs, ...other } = usePolkadotApiRx(
    useCallback((api) => api.query.staking.validators.entries(), [])
  );

  const prefMap = useEntryMap(
    validatorPrefs,
    useCallback((key) => key.args[0].toString(), [])
  );

  return { data: prefMap, ...other };
};

export default useValidatorPrefs;
