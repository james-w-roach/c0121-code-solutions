/* exported includes */
function includes(array, value) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === value) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}
