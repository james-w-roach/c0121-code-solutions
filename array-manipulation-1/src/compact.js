/* exported compact */
function compact(array) {
  var array2 = [];
  var i = 0;
  while (i < array.length) {
    if (Boolean(array[i]) === true) {
      array2.push(array[i]);
    }
    i++;
  }
  return array2;
}
