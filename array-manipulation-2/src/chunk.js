/* exported chunk */
function chunk(array, size) {
  var array2 = [];
  var subArray = [];
  var i = 0;
  while (i <= array.length) {
    if (subArray.length < size) {
      subArray.push(array[i]);
    } else {
      array2.push(subArray);
      subArray = [];
      subArray.push(array[i]);
    }
    i++;
  }
  subArray = [];
  var extra = (array.length % size);
  if (extra > 0) {
    for (extra; extra > 0; extra--) {
      subArray.push(array[array.length - extra]);
    }
    array2.push(subArray);
  }
  return array2;
}
