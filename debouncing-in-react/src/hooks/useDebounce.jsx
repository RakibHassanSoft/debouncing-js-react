import { useCallback } from 'react';

const useDebounce = (callback, delay) => {
  const debouncedCallback = useCallback(() => {
    let handler;
    return (...args) => {
      if (handler) {
        clearTimeout(handler);
      }
      handler = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }, [callback, delay]);

  return debouncedCallback();
};

export default useDebounce;


// export default useDebounce;
