/* exported titleCase */
function titleCase(string) {
  var titleString = '';
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      if (words[i][j] === ':') {
        var followSemicolon = words[i + 1];
        words.splice((i + 1), 1);
      }
      if (words[i][j] === '-') {
        var followDash = words[i];
        titleString += words[i][0].toUpperCase();
        titleString += words[i].slice(1, (j + 1));
        titleString += words[i][j + 1].toUpperCase();
        titleString += words[i].slice((j + 2));
        titleString += ' ';
      }
    }
    if (!followDash) {
      if (words[i].length <= 3 && words[i] !== 'api' && words[i] !== 'web') {
        titleString += words[i];
      } else {
        if (words[i].toLowerCase() === 'javascript' || words[i].toLowerCase() === 'javascript:') {
          titleString += words[i][0].toUpperCase();
          titleString += words[i].slice(1, 4);
          titleString += words[i][4].toUpperCase();
          titleString += words[i].slice(5);
        } else if (words[i] === 'api') {
          titleString += words[i].toUpperCase();
        } else {
          titleString += words[i][0].toUpperCase();
          titleString += words[i].slice(1);
        }
      }
      if (i !== (words.length - 1)) {
        titleString += ' ';
      }
      if (followSemicolon) {
        titleString += followSemicolon[0].toUpperCase();
        titleString += followSemicolon.slice(1);
        titleString += ' ';
        followSemicolon = '';
      }
    }
    followDash = '';
  }
  return titleString;
}
