/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var char1 = string[firstIndex];
  var char2 = string[secondIndex];
  var i = 0;
  while (i < string.length) {
    if (i === firstIndex) {
      newString += char2;
    } else if (i === secondIndex) {
      newString += char1;
    } else {
      newString += string[i];
    }
    i++;
  }
  return newString;
}
