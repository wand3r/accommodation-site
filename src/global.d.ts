type SizeType = {
  width: number;
  height: number;
};

type CssLength = number | string;

interface Array<T> {
  max(fn: (t: T) => number): number;
  min(fn: (t: T) => number): number;
  sum(fn: (t: T) => number): number;
  splitEvery(n: number): T[][];
  nextIndex(index: number, loop: boolean): number | undefined;
  prevIndex(index: number, loop: boolean): number | undefined;
}

interface NodeModule {
  hot: any;
}

interface Window {
  __glam: string;
}
