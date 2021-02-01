/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var vowels = 'aieouAIEOU';
  var i = 0;
  while (i < string.length) {
    if (vowels.indexOf(string[i]) !== -1) {
      count++;
    }
    i++;
  }
  return count;
}
