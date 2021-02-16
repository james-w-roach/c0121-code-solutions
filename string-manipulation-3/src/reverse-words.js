/* exported reverseWords */
function reverseWords(string) {
  var string2 = '';
  var string3 = '';
  for (var i = 0; i <= string.length; i++) {
    if (string[i] === ' ' || string.length === i) {
      for (var j = (string2.length - 1); j >= 0; j--) {
        string3 += string2[j];
      }
      if (i !== string.length) {
        string3 += ' ';
      }
      string2 = '';
    } else {
      string2 += string[i];
    }
  }
  return string3;
}
