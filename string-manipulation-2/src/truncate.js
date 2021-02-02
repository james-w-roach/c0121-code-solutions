/* exported truncate */
function truncate(length, string) {
  if (string.length < length) {
    return string + '...';
  }
  var truncated = '';
  var i = 0;
  while (i < length) {
    truncated += string[i];
    i++;
  }
  truncated += '...';
  return truncated;
}
