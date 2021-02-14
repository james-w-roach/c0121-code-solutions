/* exported defaults */
function defaults(target, source) {
  var object2 = target;
  var test = target.key;
  for (var key in source) {
    if (key !== test) {
      object2[key] = source[key];
    } else {
      for (var key2 in object2) {
        if (key === key2) {
          continue;
        }
      }
    }
  }
  return object2;
}
