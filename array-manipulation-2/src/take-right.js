/* exported takeRight */
function takeRight(array, count) {
  var array2 = [];
  if (count > array.length) {
    array2 = array;
    return array2;
  }
  var i = array.length - count;
  while (i < array.length) {
    array2.push(array[i]);
    i++;
  }
  return array2;
}
