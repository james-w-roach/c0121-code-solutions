/* exported invert */
function invert(source) {
  var object2 = {};
  for (var key in source) {
    var key2 = key;
    var value = source[key];
    object2[value] = key2;
  }
  return object2;
}
