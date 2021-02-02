/* exported capitalize */
function capitalize(word) {
  var newWord = '';
  var i = 0;
  while (i < word.length) {
    if (i === 0) {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
    i++;
  }
  return newWord;
}
