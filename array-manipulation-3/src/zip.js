/* exported zip */
function zip(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (first[i] && second[i]) {
      newArray.push([first[i], second[i]]);
    }
  }
  return newArray;
}
