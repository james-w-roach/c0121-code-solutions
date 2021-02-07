/* exported dropRight */
function dropRight(array, count) {
  var array2 = [];
  var i = 0;
  while (i < (array.length - count)) {
    array2.push(array[i]);
    i++;
  }
  return array2;
}
