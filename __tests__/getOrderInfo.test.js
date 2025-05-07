const getOrderInfo = require("../katas/day-2/getOrderInfo");
//1. return an object with customers details in it
//2. returns a new object
//3. check if input has not been mutated

describe("getOrderInfo", () => {
  test("returns current input if all the students have locations", () => {
    const input = getOrderInfo({
      userId: 321,
      firstName: "Bob",
      lastName: "Frogs",
      hairstyle: null,
      hasMotorcycle: true,
      shippingAddress: "123 Example Road",
      orderId: 1,
      favouriteColour: "chartreuse",
    });

    const output = {
      userId: 321,
      shippingAddress: "123 Example Road",
      orderId: 1,
    };
    expect(input).toEqual(output);
  });
  test("returns a new object", () => {
    const input = {
      userId: 321,
      shippingAddress: "123 Example Road",
      orderId: 1,
    };

    const output = getOrderInfo(input);

    expect(input).not.toBe(output);
  });
  test("check if input has not been mutated", () => {
    const input = {
      userId: 321,
      shippingAddress: "123 Example Road",
      orderId: 1,
    };
    const copyInput = {...input}
    
    getOrderInfo(input);
    
    expect(copyInput).toEqual(input);
  });
});
