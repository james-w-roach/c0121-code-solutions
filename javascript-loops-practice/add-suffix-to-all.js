/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var withSuffix = [];
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    withSuffix.push(words[i]);
  }
  return withSuffix;
}
