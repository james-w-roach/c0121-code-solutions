/* exported pick */
function pick(source, keys) {
  var object2 = {};
  var i = 0;
  while (i < keys.length) {
    for (var property in source) {
      if (property === keys[i]) {
        object2 += property;
        object2.property.value = property.value;
      }
    }
    i++;
  }
  return object2;
}
