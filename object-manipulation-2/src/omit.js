/* exported omit */
function omit(source, keys) {
  var object2 = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key !== keys[i]) {
        object2[key] = source[key];
      } else {
        keys.splice(i, 1);
      }
    }
  }
  return object2;
}
