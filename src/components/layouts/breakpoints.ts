export type BreakpointKey = "sm" | "md" | "lg" | "xl" | "xxl";

export const BREAKPOINTS: Record<BreakpointKey, number> = {
  sm: 480,
  md: 768,
  lg: 1100,
  xl: 1440,
  xxl: 1920,
};

export const md = {
  // 指定ブレイクポイント以上
  up: (key: BreakpointKey) => `(width >= ${BREAKPOINTS[key]}px)`,

  // 指定ブレイクポイント未満
  down: (key: BreakpointKey) => `(width < ${BREAKPOINTS[key]}px)`,

  // 指定ブレイクポイント帯のみ
  between: (min: BreakpointKey, max: BreakpointKey) =>
    `(${BREAKPOINTS[min]}px <= width < ${BREAKPOINTS[max]}px)`,
};

export default BREAKPOINTS;
