function sumDigits(digitsToBeSummed) {
  const digitsString = String(digitsToBeSummed).split("");
  let totalArray = [];

  for (let i = 0; i < digitsString.length; i++) {
    if (Number(digitsString[i])) {
      totalArray.push(Number(digitsString[i]));
    }
  }
  return totalArray.reduce((partialSum, a) => partialSum + a, 0);
}
sumDigits(10.5);
module.exports = sumDigits;
