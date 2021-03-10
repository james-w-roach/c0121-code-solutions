/* exported titleCase */
function titleCase(string) {
  var titleString = '';
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i].length < 3) {
      titleString += words[i];
    } else {
      titleString += words[i][0].toUpperCase();
      titleString += words[i].slice(1);
    }
  }
  return titleString;
}
