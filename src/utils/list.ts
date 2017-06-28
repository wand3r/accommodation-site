export const sum = <T>(fn: (t: T) => number, xs: T[]): number => {
  return xs.reduce((sum, x) => sum + fn(x), 0);
};

export const max = <T>(fn: (t: T) => number, xs: T[]): number =>
  xs.reduce((max, x) => (fn(x) > max ? fn(x) : max), Number.NEGATIVE_INFINITY);

export const min = <T>(fn: (t: T) => number, xs: T[]): number =>
  xs.reduce((min, x) => (fn(x) < min ? fn(x) : min), Number.MAX_VALUE);

export const find = <T>(
  fn: (t: T, i: number, xs: T[]) => boolean,
  xs: T[],
): T | undefined => {
  for (let i = 0; i < xs.length; i++) {
    if (fn(xs[i], i, xs) === true) return xs[i];
  }
  return undefined;
};

export const nextIndex = (
  index: number,
  loop: boolean,
  xs: any[],
): number | undefined =>
  index === xs.length - 1 && loop
    ? 0
    : index === xs.length - 1 && !loop ? undefined : index + 1;

export const prevIndex = (
  index: number,
  loop: boolean,
  xs: any[],
): number | undefined =>
  index === 0 && loop
    ? xs.length - 1
    : index === 0 && !loop ? undefined : index - 1;

export const splitEvery = <T>(n: number, xs: T[]): T[][] => {
  let result: T[][] = [];
  const totalPartsCount = Math.ceil(xs.length / n);
  for (let i = 0; i < totalPartsCount; i++) {
    const beginIndex = i * n;
    const endIndex = beginIndex + n > xs.length ? xs.length : beginIndex + n;
    result[i] = xs.slice(beginIndex, endIndex);
  }
  return result;
};
