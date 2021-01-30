/* exported isLowerCased */
function isLowerCased(word) {
  var i = 0;
  while (i < word.length) {
    if (word[i] === word[i].toLowerCase()) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}
