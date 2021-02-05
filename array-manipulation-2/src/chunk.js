/* exported chunk */
function chunk(array, size) {
  var array2 = [];
  var subArray = [];
  var i = 0;
  while (i <= array.length) {
    if (subArray.length !== size) {
      subArray.push(array[i]);
    } else if (array[i] === array[array.length - 1] && subArray.length < size) {
      subArray = [];
      subArray.push(array[i]);
      array2.push(array[i]);
    } else {
      array2.push(subArray);
      subArray = [];
      subArray.push(array[i]);
    }
    i++;
  }
  return array2;
}
