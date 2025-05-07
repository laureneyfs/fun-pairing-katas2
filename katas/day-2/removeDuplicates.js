function removeDuplicates(arr) {
  const copyArr = [...arr];
  for (let i = 0; i < copyArr.length; i++) {
    let numberStorage = copyArr[i];
    if (copyArr.indexOf(numberStorage) !== copyArr.lastIndexOf(numberStorage)) {
      copyArr.splice(i, 1);
    }
  }

  return copyArr;
}

module.exports = removeDuplicates;
