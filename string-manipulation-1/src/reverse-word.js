/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  var i = word.length - 1;
  while (i >= 0) {
    var char = word[i];
    newWord += char;
    i--;
  }
  return newWord;
}
