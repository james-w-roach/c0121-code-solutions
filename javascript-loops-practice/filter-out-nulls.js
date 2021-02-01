/* exported filterOutNulls */
function filterOutNulls(values) {
  var withoutNull = [];
  var i = 0;
  while (i < values.length) {
    if (values[i] !== null) {
      withoutNull.push(values[i]);
    }
    i++;
  }
  return withoutNull;
}
