/* exported pick */
function pick(source, keys) {
  var object2 = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (source[key] === undefined) {
        continue;
      } else if (key === keys[i]) {
        object2[key] = source[key];
      }
    }
  }
  return object2;
}
