/* exported titleCase */
function titleCase(string) {
  var titleString = '';
  var currentWord = '';
  for (var i = 0; i <= string.length; i++) {
    if (string[i] === ' ' || i === string.length) {
      if (currentWord.length <= 3) {
        titleString += currentWord;
        currentWord = '';
      } else {
        titleString += currentWord[0].toUpperCase();
        for (var j = 1; j < currentWord.length; j++) {
          titleString += currentWord[j];
        }
        currentWord = '';
      }
      if (string[i] === ' ') {
        titleString += ' ';
      }
    } else {
      currentWord += string[i];
    }
  }
  return titleString;
}
