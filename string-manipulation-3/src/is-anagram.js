/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var match = '';
  var i = 0;
  while (i < secondString.length) {
    for (var j = 0; j < firstString.length; j++) {
      if (secondString[i] === firstString[j]) {
        match += secondString[i];
        firstString[j] = '1';
      }
    }
    i++;
  }
  return match;
}
