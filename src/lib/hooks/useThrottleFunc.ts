import { useCallback, useRef } from "react";

// 受け取った関数をスロットリング
export function useThrottleFunc<T>(
  fn: (args?: T) => void,
  delay = 500, // スロットルする時間
) {
  const throttlingTimer = useRef<undefined | NodeJS.Timeout>();
  return useCallback(
    (args?: T) => {
      if (throttlingTimer.current) return; // すでにタイマーがセットされている場合は何もしない
      throttlingTimer.current = setTimeout(() => {
        fn(args);
        throttlingTimer.current = undefined; // タイマーをリセット
      }, delay);
    },
    [throttlingTimer, fn, delay],
  );
}
