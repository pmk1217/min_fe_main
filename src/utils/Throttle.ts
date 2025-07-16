import { useCallback, useRef } from 'react';

export const throttle = (callback, time: number) => {
  let isWaiting = false;

  return (...args) => {
    if (isWaiting) return;
    isWaiting = true;
    callback.apply(this, args);

    setTimeout(() => {
      isWaiting = false;
    }, time);
  };
};
