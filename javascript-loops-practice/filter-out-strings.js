/* exported filterOutStrings */
function filterOutStrings(values) {
  var withoutStrings = [];
  var i = 0;
  while (i < values.length) {
    if (typeof values[i] === 'string') {
      i++;
    } else {
      withoutStrings.push(values[i]);
      i++;
    }
  }
  return withoutStrings;
}
