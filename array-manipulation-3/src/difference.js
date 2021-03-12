/* exported difference */
function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        first.splice(i, 1);
        second.splice(j, 1);
      }
    }
  }
  for (var k = 0; k < first.length; k++) {
    newArray.push(first[k]);
  }
  for (var l = 0; l < second.length; l++) {
    newArray.push(second[l]);
  }
  return newArray;
}
