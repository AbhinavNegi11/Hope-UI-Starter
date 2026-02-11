import { useEffect, useState } from "react";

export function useDebounce(value: string, delay?: number) {
  const debounceDelay = delay ?? 1500; // Default to 500ms if delay is not provided
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), debounceDelay);
    console.log("debouncedValue", debouncedValue);
    return () => clearTimeout(handler);
  }, [value, debounceDelay]);
  return debouncedValue;
}
