/* exported defaults */
function defaults(target, source) {
  if (JSON.stringify(source) === '{}') {
    return target;
  }
  if (JSON.stringify(target) === '{}') {
    for (var key in source) {
      target[key] = source[key];
    }
    return target;
  }
  for (var key2 in source) {
    if (key2 === target[key2]) {
      delete source[key2];
    }
  }
  target[key2] = source[key2];
  return target;
}
