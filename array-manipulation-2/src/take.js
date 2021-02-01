/* exported take */
function take(array, count) {
  var array2 = [];
  var i = 0;
  while (i < count) {
    if (count > array.length) {
      array2 = array;
    } else {
      array2.push(array[i]);
    }
    i++;
  }
  return array2;
}
