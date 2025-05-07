const removeDuplicates = require("../katas/day-2/removeDuplicates.js");

//1. returns an array if there are no duplicates
//2. returns an array with duplicates removed if there are duplicates
//3. return a new array
//4. confirm that the original array is unmutated

describe("removeDuplicates", () => {
  test("returns an array if there are no duplicates", () => {
    const input = removeDuplicates([1, 2, 3, 4, 5]);
    const output = [1, 2, 3, 4, 5];
    expect(input).toEqual(output);
  });
  test("returns an array with duplicates removed if there are duplicates", () => {
    const input = removeDuplicates([1, 1, 1, 3, 4, 1, 5]);
    const output = [1, 3, 4, 5];
    expect(input).toEqual(output);
  });
  test("returns a new array", () => {
    const input = [1, 1, 1, 3, 4, 1, 5];
    const output = removeDuplicates(input);
    expect(input).not.toBe(output);
  });
  test("does not mutate original array", () => {
    const input = [1, 1, 1, 3, 4, 1, 5];
    const copyofInput = [...input];
    removeDuplicates(input);
    expect(input).toEqual(copyofInput);
  });
});
