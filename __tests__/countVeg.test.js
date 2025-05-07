const countVeg = require("../katas/day-1/countVeg.js");
describe("countVeg", () => {
  test("Return quantity of one type", () => {
    const actual = countVeg(
      [{ name: "Runner beans", type: "legume", quantity: 4 }],
      "legume"
    );
    const expected = 4;
    expect(actual).toBe(expected);
  });
  test("returns quantity of one type when given 2 types", () => {
    const actual = countVeg(
      [
        { name: "Runner beans", type: "legume", quantity: 4 },
        { name: "Chard", type: "leaf", quantity: 3 },
      ],
      "leaf"
    );
    const expected = 3;
    expect(actual).toBe(expected);
  });

  test("sums quantity of type when given multiple objects with the same type", () => {
    const actual = countVeg(
      [{name: 'Parsnip', type: 'root', quantity: 4},
        {name: 'Broccoli', type: 'brassica', quantity: 1},
        {name: 'Carrot', type: 'root', quantity: 5},
        {name: 'Onion', type: 'bulb', quantity: 3},
        {name: 'Chard', type: 'leaf', quantity: 3},
        {name: 'Runner beans', type: 'legume', quantity: 8}],
      "root"
    );
    const expected = 9;
    expect(actual).toBe(expected);
  });
});
