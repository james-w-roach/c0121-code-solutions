/* exported reverse */
function reverse(array) {
  var array2 = [];
  var i = array.length - 1;
  while (i >= 0) {
    array2.push(array[i]);
    i--;
  }
  return array2;
}
