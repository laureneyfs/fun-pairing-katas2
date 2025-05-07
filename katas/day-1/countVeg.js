function countVeg(arr, type) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === type) {
      result += arr[i].quantity;
    }
  }
  return result;
}

module.exports = countVeg;
