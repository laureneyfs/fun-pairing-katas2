function orderVeg(arr) {
  let copyArr = [...arr];
  copyArr.sort((a, b) => a.quantity - b.quantity);

  return copyArr;
}
module.exports = orderVeg;

//check if [0] > [1], if so, move [1] to 0 and then reset i to 0 so that it repeats the loop from the beginning
