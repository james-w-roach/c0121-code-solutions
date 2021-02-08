/* exported pick */
function pick(source, keys) {
  var object2 = {};
  for (var i = 0; i < source.length; i++) {
    if (source[i] === keys) {
      object2 += source[i];
    }
    i++;
  }
  return object2;
}
