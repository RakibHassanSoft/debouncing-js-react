
import { useState, useCallback } from 'react';
import _ from 'lodash';

const useDebounce = (callback, delay) => {
  const debouncedCallback = useCallback(
    _.debounce((...args) => {
      callback(...args);
    }, delay),
    [callback, delay]
  );

  return debouncedCallback;
};

export default useDebounce;


//useDebounceWithLodash