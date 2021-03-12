/* exported unique */
function unique(array) {
  var newArray = [];
  if (array.length < 1) {
    return newArray;
  }
  newArray.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (newArray[j] === array[i]) {
        var match = true;
      } else if (j === (newArray.length - 1) && !match) {
        newArray.push(array[i]);
      }
    }
    match = false;
  }
  return newArray;
}
