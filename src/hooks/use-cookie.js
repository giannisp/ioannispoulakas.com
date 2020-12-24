/**
 * @file Cookie hook.
 */

import { useState } from 'react';
import Cookies from 'js-cookie';

const useCookie = (key, initialValue) => {
  const [innerValue, setInnerValue] = useState(
    () => Cookies.get(key) || initialValue,
  );

  const setValue = (value, options) => {
    setInnerValue(value);
    Cookies.set(key, value, options);
  };

  return [innerValue, setValue];
};

export default useCookie;
