function organiseWardrobe(arr) {
  const arrCopy = [...arr];
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i].purchase_year < 2010 && arrCopy[i].coolness_rating < 5) {
      arrCopy[i].action = "donate";
    }
    if (arrCopy[i].purchase_year < 2010 && arrCopy[i].coolness_rating >= 5) {
      arrCopy[i].action = "sell";
    }
    if (arrCopy[i].purchase_year >= 2010) {
      arrCopy.splice(i, 1);
      i = 0;
    }
  }
  console.log(arrCopy);
  return arrCopy;
}

module.exports = organiseWardrobe;
