/* exported firstChars */
function firstChars(length, string) {
  if (string.length < length) {
    return string;
  }
  var newString = '';
  var i = 0;
  while (i < length) {
    if (Boolean(string[i]) === false) {
      return newString;
    } else {
      newString += string[i];
    }
    i++;
  }
  return newString;
}
