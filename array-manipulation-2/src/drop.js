/* exported drop */
function drop(array, count) {
  var array2 = [];
  var i = count;
  while (i < array.length) {
    if (count > array.length) {
      array2 = array;
    } else {
      array2.push(array[i]);
    }
    i++;
  }
  return array2;
}
