import { useEffect, useState } from "react";

/**
 * Debounce multiple fields in an object.
 * @param values Object with fields to debounce.
 * @param delay Debounce delay in ms.
 * @returns Debounced object.
 */
export function useDebounceFields<T extends Record<string, any>>(
  values: T,
  delay: number = 1500
): T {
  const [debouncedValues, setDebouncedValues] = useState(values);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValues(values), delay);
    return () => clearTimeout(handler);
  }, [values, delay]);

  return debouncedValues;
}
