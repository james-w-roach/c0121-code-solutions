/* exported chunk */
function chunk(array, size) {
  var array2 = [];
  var subArray = [];
  var i = 0;
  while (i < array.length) {
    if (i < size) {
      subArray.push(array[i]);
    } else if (i >= size) {
      subArray.push(array[i]);
    } else if (subArray.length === size) {
      array2.push(subArray);
    }
    i++;
  }
  return array2;
}
