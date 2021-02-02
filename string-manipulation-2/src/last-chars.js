/* exported lastChars */
function lastChars(length, string) {
  if ((string.length - length) < 0) {
    return string;
  }
  var newString = '';
  var i = string.length - length;
  while (i < string.length) {
    newString += string[i];
    i++;
  }
  return newString;
}
