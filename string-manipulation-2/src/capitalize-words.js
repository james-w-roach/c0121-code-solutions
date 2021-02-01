/* exported capitalizeWords */
function capitalizeWords(string) {
  var string2 = string[0].toUpperCase();
  var i = 1;
  while (i < string.length) {
    if (string[i] === ' ') {
      string2 += ' ' + string[i + 1].toUpperCase();
      i += 2;
    } else {
      string2 += string[i].toLowerCase();
      i++;
    }
  }
  return string2;
}
