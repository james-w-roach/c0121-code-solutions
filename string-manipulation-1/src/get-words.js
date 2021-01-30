/* exported getWords */
function getWords(string) {
  var array = [];
  var currentString = '';
  var i = 0;
  while (i < string.length) {
    if (string[i] === ' ') {
      array.push(currentString);
      i++;
    } else {
      currentString += string[i];
      i++;
    }
  }
  return array;
}
