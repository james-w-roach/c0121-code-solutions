/* exported tail */
function tail(array) {
  var array2 = [];
  var i = 1;
  while (i < array.length) {
    array2.push(array[i]);
    i++;
  }
  return array2;
}
