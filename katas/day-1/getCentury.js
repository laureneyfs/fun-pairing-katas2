function getCentury(num) {
  const century = Math.ceil(num / 100);
  const lastdigitStr = String(century);
  const lastdigit = lastdigitStr[lastdigitStr.length - 1];
  const numberToLastDigit = lastdigitStr[lastdigitStr.length - 2];

  if(Number(numberToLastDigit) === 1) {
    return `${century}th` 
  }

  if (Number(lastdigit) === 1) {
    return `${century}st`;
  } else if (Number(lastdigit) === 2) {
    return `${century}nd`;
  } else if (Number(lastdigit) === 3) {
    return `${century}rd`;
  } else {
    return `${century}th`;
  }
}

module.exports = getCentury;
