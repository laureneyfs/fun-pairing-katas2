const updateRemoteStudents = require("../katas/day-2/updateRemoteStudents");

//1. returns current input if all the students have locations
//2. add new value to location if location desn't exist
//3. returns a new array
//4. check if input has not been mutated

describe("updateRemoteStudents", () => {
  test("returns current input if all the students have locations", () => {
    const input = updateRemoteStudents([
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Tao", age: 47, location: "manchester" },
    ]);
    const output = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    expect(input).toEqual(output);
  });
  test("add new value to location if location desn't exist", () => {
    const input = updateRemoteStudents([
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ]);
    const output = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    expect(input).toEqual(output);
  });
  test("returns a new array", () => {
    const input = [
        { name: "Hypatia", age: 31, location: "leeds" },
        { name: "Ramanujan", age: 22, location: "remote" },
        { name: "Tao", age: 47, location: "manchester" },
      ]
    const output = updateRemoteStudents(input)
    expect(input).not.toBe(output);
  });
  test("check if input has not been mutated", () => {
    const input = [
        { name: "Hypatia", age: 31, location: "leeds" },
        { name: "Ramanujan", age: 22, location: "remote" },
        { name: "Tao", age: 47, location: "manchester" },
      ]
    const copyInput = [...input]
    updateRemoteStudents(input)
    expect(input).toEqual(copyInput);
  });
  
});
