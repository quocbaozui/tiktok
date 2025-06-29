import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // Lấy id của setTimeout
    const handler = setTimeout(() => setDebounceValue(value), delay);

    // cleanup function
    return () => clearTimeout(handler);

    // dependence chỉ để mỗi value mà không để thêm delay là vì chỉ value thay đổi
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceValue;
}

export default useDebounce;
