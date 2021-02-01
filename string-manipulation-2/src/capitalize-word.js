/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word[0].toUpperCase();
  var i = 1;
  while (i < word.length) {
    if (word[i] === 's' || word[i] === 'S') {
      newWord += 'S';
    } else {
      newWord += word[i].toLowerCase();
    }
    i++;
  }
  return newWord;
}
