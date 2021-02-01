/* exported includesSeven */
function includesSeven(array) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === 7) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}
