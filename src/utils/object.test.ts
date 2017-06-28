import * as Obj from "./object";

describe("Object pick", () => {
  it("two existing properties", () => {
    const obj = { 
      a: 1,
      b: { 
        c: 1,
      },
      g: {
        h: "foo",
      }
    }    
    const picked: { a: number, g: { h: string} } = 
      Obj.pick(obj, "a", "g");
    expect(picked).toEqual({a: 1, g: { h: "foo" }})
  })
})

describe("Obj.path", () => {
  const sample = { 
    a: { 
      b: { 
        c: "test" 
      }, 
      d: undefined 
    } 
  };
  it("with correct path to property", () => {
    const result: string = Obj.path(sample, "a", "b", "c")
    expect(result).toEqual("test");
  });
  it("with path to undefined property", () => {
    expect(Obj.path(sample, "a", "d")).toEqual(undefined);
  });
});
