import * as List from "./list";

Array.prototype.sum = function<T>(this: T[], fn: (t: T) => number) {
  return List.sum(fn, this);
};

Array.prototype.max = function<T>(this: T[], fn: (t: T) => number) {
  return List.max(fn, this);
};

Array.prototype.min = function<T>(this: T[], fn: (t: T) => number) {
  return List.min(fn, this);
};

Array.prototype.find = function<T>(
  this: T[],
  fn: (t: T, index: number, arr: T[]) => boolean,
): T | undefined {
  return List.find(fn, this);
};

Array.prototype.nextIndex = function<T>(
  this: T[],
  index: number,
  loop: boolean,
): number | undefined {
  return List.nextIndex(index, loop, this);
};

Array.prototype.prevIndex = function<T>(
  this: T[],
  index: number,
  loop: boolean,
): number | undefined {
  return List.prevIndex(index, loop, this);
};

Array.prototype.splitEvery = function<T>(this: T[], n: number): T[][] {
  return List.splitEvery(n, this);
};
