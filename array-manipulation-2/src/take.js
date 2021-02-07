/* exported take */
function take(array, count) {
  var array2 = [];
  if (count > array.length) {
    array2 = array;
    return array2;
  }
  var i = 0;
  while (i < count) {
    array2.push(array[i]);
    i++;
  }
  return array2;
}
