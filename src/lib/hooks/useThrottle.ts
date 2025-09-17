import { useEffect, useRef, useState } from "react";

export const useThrottle = <T>(value: T, delay = 1000) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    if (Date.now() - lastExecuted.current >= delay) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const throttleTimer = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, delay);
      return () => clearTimeout(throttleTimer);
    }
  }, [value, delay]);

  return throttledValue;
};
