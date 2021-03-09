/* exported titleCase */
function titleCase(string) {
  var titleString = '';
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
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
    }
  }
  return titleString;
}
