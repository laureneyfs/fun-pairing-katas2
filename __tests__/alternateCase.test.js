const countVeg = require("../katas/day-1/alternateCase.js");

describe("alternateCase", () => {
  test("convert a letter to uppercase", () => {
    const actual = countVeg("h");
    const expected = "H";
    expect(actual).toBe(expected);
  });
  test("convert a word to alternating case", () => {
    const actual = countVeg("hello");
    const expected = "HeLlO";
    expect(actual).toBe(expected);
  });
  test("convert a word to alternating case accounting for spaces", () => {
    const actual = countVeg("hello world");
    const expected = "HeLlO wOrLd";
    expect(actual).toBe(expected);
  });
});
