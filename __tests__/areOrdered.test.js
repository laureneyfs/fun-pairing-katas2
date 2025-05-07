const areOrdered = require("../katas/day-1/areOrdered.js");

describe("areOrdered", () => {
  test("returns false if given an empty array", () => {
    const actual = areOrdered([]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test("returns true if given an array with length 1 and number", () => {
    const actual = areOrdered([1]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  test("returns false if given an array with 1 non-number", () => {
    const actual = areOrdered(["1"]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test("returns true if given a sorted array with length > 1 and false if given an unsorted array with length > 1", () => {
    const actual = areOrdered([1, 2, 3, 5, 7]);
    const expected = true;
    const unsortedActual = areOrdered([1, 3, 2, 5, 4]);
    const unsortedExpected = false;
    expect(actual).toBe(expected);
    expect(unsortedActual).toBe(unsortedExpected);
  });
  test("returns false if given an array with length > 1 that contains no numbers", () => {
    const actual = areOrdered(["a", "b", "c", "d"]);
    const expected = false;
    expect(actual).toBe(expected);
  });
  test("returns correct response regardless of multimedia array", () => {
    const actual = areOrdered([1, "b", 2, "d", 5, "e"]);
    const expected = true;
    const unsortedActual = areOrdered([1, "b", 3, "c", 2]);
    const unsortedExpected = false;
    expect(actual).toBe(expected);
    expect(unsortedActual).toBe(unsortedExpected);
  });
});
