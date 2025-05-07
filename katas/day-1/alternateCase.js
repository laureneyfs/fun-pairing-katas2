function alternateCase(sentence) {
  let sentenceArray = sentence.toLowerCase().split("");
  let result = "";
  let count = 0;
  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] !== " " && i !== 0) {
      count++;
    }
    if (count % 2 === 0) {
      result += sentenceArray[i].toUpperCase();
    } else result += sentenceArray[i];
  }
  return result;
}

module.exports = alternateCase;
