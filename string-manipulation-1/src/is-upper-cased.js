/* exported isUpperCased */
function isUpperCased(word) {
  var i = 0;
  while (i < word.length) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
    i++;
  }
  return true;
}
