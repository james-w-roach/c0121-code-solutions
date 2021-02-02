/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord = word[0].toUpperCase();
  var i = 1;
  while (i < word.length) {
    if (word.toLowerCase() === 'javascript') {
      return 'JavaScript';
    } else {
      newWord += word[i].toLowerCase();
    }
    i++;
  }
  return newWord;
}
