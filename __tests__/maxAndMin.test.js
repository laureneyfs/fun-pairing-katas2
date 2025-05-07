const { min, max } = require("../katas/day-1/maxAndMin.js");

describe("maxAndMin", () => {
  test("returns a number if given an array with 1 number", () => {
    const maxActual = max([6]);
    const minActual = min([6]);
    const expected = 6;
    expect(minActual).toBe(expected);
    expect(maxActual).toBe(expected);
  });
});
