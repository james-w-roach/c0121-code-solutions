/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  if ((string.length - length) < 0) {
    newString = string;
  } else {
    var i = string.length - length;
    while (i < string.length) {
      newString += string[i];
      i++;
    }
    return newString;
  }
  return newString;
}
