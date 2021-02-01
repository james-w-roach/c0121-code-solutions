/* exported isVowel */
function isVowel(character) {
  var vowels = 'aieouAIEOU';
  var i = 0;
  while (i < vowels.length) {
    if (vowels[i] === character) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}
