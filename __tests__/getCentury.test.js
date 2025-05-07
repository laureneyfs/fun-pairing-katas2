const getCentury = require("../katas/day-1/getCentury.js");


describe("getCentury", () => {
    test("checking for correct output for 4-digit year", () => {
      const actual = getCentury(2001);
      const expected = "21st";
      expect(actual).toBe(expected);
    });
    test("checking for multiple by 100", () => {
        const actual = getCentury(2000);
        const expected = "20th";
        expect(actual).toBe(expected);
      });
      
      test("checking for less than 4 digits where the suffix hasn't changed", () => {
        const actual = getCentury(101);
        const expected = "2nd";
        expect(actual).toBe(expected);
      });
      test("checking for 4 digits where the suffix changes", () => {
        const actual = getCentury(1001);
        const expected = "11th";
        expect(actual).toBe(expected);
      });


});
