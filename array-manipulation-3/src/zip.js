/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length < second.length) {
    var shortest = first;
  } else {
    shortest = second;
  }
  for (var i = 0; i < shortest.length; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
