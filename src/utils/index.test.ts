import * as Utils from  "./index"

test("proportion", () => {
  const x1 = Utils.proportion({y1: 3, x2: 8, y2: 12})
  expect(x1).toBe(2)
  const y1 = Utils.proportion({x1: 2, x2: 8, y2: 12})
  expect(y1).toBe(3)
  const x2 = Utils.proportion({x1: 2, y1: 3, y2: 12})
  expect(x2).toBe(8)
  const y2 = Utils.proportion({x1: 2, y1: 3, x2: 8})
  expect(y2).toBe(12)
});

describe("fit rect dimensions", () => {
  it("when dimensions are bigger", () => {
    const result = Utils.fitRectDimensions({width: 200, height: 100}, {width: 100, height: 20})
    expect(result).toEqual({width: 40, height: 20})
  })
  it("when dimensions are smaller", () => {
    const result = Utils.fitRectDimensions({width: 50, height: 10}, {width: 100, height: 50})
    expect(result).toEqual({width: 100, height: 20})
  })
  it("width is bigger", () => {
    const result = Utils.fitRectDimensions({width: 100, height: 50}, {width: 50, height: 100})
    expect(result).toEqual({width: 50, height: 25})
  })
  it("height is bigger", () => {
    const result = Utils.fitRectDimensions({width: 120, height: 300}, {width: 200, height: 100})
    expect(result).toEqual({width: 40, height: 100})
  })
});

const simpleFn = (x: number): number => x;
const genericFn = <T>(x: T): T => x;

test("trottle", () => {
  const throttleAdd = Utils.throttle(simpleFn, 100)
  throttleAdd(10)

  const throttleGenericFn = Utils.throttle(genericFn, 100);
  throttleGenericFn({foo: "", bar: 1})
});

describe("Pipe", () => {
  it("with 3 functions", () => {
    const result = Utils.pipe(
      {foo: "lol", bar: 1},
      genericFn,
      x => x.bar,
      simpleFn
    );
    expect(result).toEqual(1);
  })
});