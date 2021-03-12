/* exported flatten */
function flatten(array) {
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (var j = 0; j < array[i].length; j++) {
        array2.push(array[i][j]);
      }
    } else {
      array2.push(array[i]);
    }
  }
  return array2;
}
