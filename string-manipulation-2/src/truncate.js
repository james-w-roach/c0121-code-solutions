/* exported truncate */
function truncate(length, string) {
  var truncated = '';
  var i = 0;
  if (string.length < length) {
    truncated = string;
  } else {
    while (i < length) {
      truncated += string[i];
      i++;
    }
  }
  truncated += '...';
  return truncated;
}
