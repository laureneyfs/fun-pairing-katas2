const organiseWardrobe = require("../katas/day-2/organiseWardrobe.js");

//1. when given 1 object with coolness < 5 and before 2010, adds 'action: donate'
//2. when given 1 object with coolness >= 5 and before 2010, adds 'action: sell'
//3. when given 1 object after 2010, returns an empty object
//3. returns an array of objects that pass criteria combining previous steps
//4. returns a new object
//5. confirms input is not mutated

describe("organiseWardrobe", () => {
  test("when given 1 object with coolness < 5 and before 2010, adds 'action: donate'", () => {
    const input = [
      { item: "ugly uggs", purchase_year: 2007, coolness_rating: 1 },
    ];
    const actual = organiseWardrobe(input);
    const expected = [
      {
        item: "ugly uggs",
        purchase_year: 2007,
        coolness_rating: 1,
        action: "donate",
      },
    ];
    expect(actual).toEqual(expected);
  });
  test("when given 1 object with coolness >= 5 and before 2010, adds 'action: sell'", () => {
    const input = [
      {
        item: "pristine sequined ballet flats",
        purchase_year: 2003,
        coolness_rating: 8,
      },
    ];
    const actual = organiseWardrobe(input);
    const expected = [
      {
        item: "pristine sequined ballet flats",
        purchase_year: 2003,
        coolness_rating: 8,
        action: "sell",
      },
    ];
    expect(actual).toEqual(expected);
  });
  test("when given 1 object after 2010, returns an empty array", () => {
    const input = [
      { item: "slouchy beanie", purchase_year: 2017, coolness_rating: -1 },
    ];
    const actual = organiseWardrobe(input);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("returns an array of objects that pass criteria combining previous steps", () => {
    const input = [
      { item: "ugly uggs", purchase_year: 2007, coolness_rating: 1 },
      {
        item: "fluorescent yellow skinny jeans",
        purchase_year: 2005,
        coolness_rating: 3,
      },
      { item: "slouchy beanie", purchase_year: 2017, coolness_rating: -1 },
      {
        item: "pristine sequined ballet flats",
        purchase_year: 2003,
        coolness_rating: 8,
      },
      {
        item: "floral print doc martens",
        purchase_year: 2014,
        coolness_rating: 6,
      },
    ];
    const actual = organiseWardrobe(input);
    const expected = [
      {
        item: "ugly uggs",
        purchase_year: 2007,
        coolness_rating: 1,
        action: "donate",
      },
      {
        item: "fluorescent yellow skinny jeans",
        purchase_year: 2005,
        coolness_rating: 3,
        action: "donate",
      },
      {
        item: "pristine sequined ballet flats",
        purchase_year: 2003,
        coolness_rating: 8,
        action: "sell",
      },
    ];
  });
  test("returns a new array", () => {
    const actual = [
      {
        item: "ugly uggs",
        purchase_year: 2007,
        coolness_rating: 1,
        action: "donate",
      },
      {
        item: "fluorescent yellow skinny jeans",
        purchase_year: 2005,
        coolness_rating: 3,
        action: "donate",
      },
      {
        item: "pristine sequined ballet flats",
        purchase_year: 2003,
        coolness_rating: 8,
        action: "sell",
      },
    ];
    const expected = organiseWardrobe(actual);
    expect(actual).not.toBe(expected);
  });
  test("confirms input was not mutated", () => {
    const input = [
      { item: "ugly uggs", purchase_year: 2007, coolness_rating: 1 },
    ];
    const copyInput = [...input];
    organiseWardrobe(input);
    expect(input).toEqual(copyInput);
  });
});
