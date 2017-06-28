import * as List from "./list"

describe("List split every", () => {
  const arr = [1,2,3,4,5,6]
  it("even slices", () => {
    expect(List.splitEvery(2, arr))
    .toEqual([[1,2], [3,4], [5,6]])
  })
  it("uneven slices", () => {
    expect(List.splitEvery(4, arr))
    .toEqual([[1,2,3,4], [5,6]])
  })
  it("empty array", () => {
    expect(List.splitEvery(3, []))
    .toEqual([])
  })
})