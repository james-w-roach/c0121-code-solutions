/* exported firstChars */
function firstChars(length, string) {
  var newString = '';
  var i = 0;
  while (i < length) {
    if (i === (string.length - 1)) {
      newString += string[i];
      return newString;
    } else if (Boolean(string[i]) === false) {
      return newString;
    } else {
      newString += string[i];
      i++;
    }
  }
  return newString;
}
