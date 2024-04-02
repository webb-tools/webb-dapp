import { useMemo } from 'react';

// TODO: This shouldn't be a hook, instead it fits better as a utility function. When it is converted to an utility function, ensure that the consumers of it are using `useMemo`, since this is typically used for potentially expensive calculations.
const useEntryMap = <Key, Value, MappedKey>(
  entries: Array<[Key, Value]> | null,
  mapKey: (key: Key) => MappedKey
): Map<MappedKey, Value> | null =>
  useMemo(() => {
    if (entries === null) {
      return null;
    }

    const map = new Map<MappedKey, Value>();

    for (const [key, value] of entries) {
      const mappedKey = mapKey(key);

      map.set(mappedKey, value);
    }

    return map;
  }, [entries, mapKey]);

export default useEntryMap;
