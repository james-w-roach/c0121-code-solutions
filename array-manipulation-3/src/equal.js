/* exported equal */
function equal(first, second) {
  var index = [];
  var match = '';
  if (first === second) {
    return true;
  }
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        index.push(j);
      }
    }
  }
  for (var k = 0; k < index.length; k++) {
    if (k === (index.length - 1)) {
      match += first[k];
    } else {
      match += first[k] + ', ';
    }
  }
  return match;
}
