/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var withSuffix = [];
  for (var i = 0; i < words.length; i++) {
    var newWords = words[i] + suffix;
    withSuffix.push(newWords);
  }
  return withSuffix;
}
