const orderVeg = require("../katas/day-2/orderVeg.js");
//0. returns object if it doesnt need sorting
//1. returns object sorted
//2. returns a new object
//3. original object is unmutated

describe("orderVeg", () => {
  test("returns an object if it doesn't need sorting", () => {
    const expected = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const actual = orderVeg([
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ]);
    expect(actual).toEqual(expected);
  });
  test("returns a sorted object if sorting is required", () => {
    const actual = orderVeg([
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ]);
    const expected = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    expect(actual).toEqual(expected);
  });
  test("returns a new array", () => {
    const input = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const returnValue = orderVeg(input);
    expect(input).not.toBe(returnValue);
  });
  test("verifies original array is unmutated", () => {
    const input = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const copyInput = [...input];

    orderVeg(input);
    expect(input).toEqual(copyInput);
  });
});
