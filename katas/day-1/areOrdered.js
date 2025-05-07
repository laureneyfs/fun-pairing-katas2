function areOrdered(arr) {
  let resultsArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      resultsArray.push(arr[i]);
    }
  }

  if (resultsArray.length === 0) {
    return false;
  } else if (arr.length === 1) {
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (resultsArray[i] > resultsArray[i + 1]) {
      return false;
    }
  }
  return true;
}
module.exports = areOrdered;
