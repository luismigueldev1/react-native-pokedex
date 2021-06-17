import {useState, useEffect} from 'react';

export function useDebouncedValue(input: string = '', time: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return {debouncedValue};
}
