/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var array = [];
  var match = '';
  var i = 0;
  while (i < secondString.length) {
    if (secondString[i] !== ' ') {
      array.push(secondString[i]);
    }
    i++;
  }
  var j = 0;
  while (j < array.length) {
    for (var k = 0; k < firstString.length; k++) {
      if (firstString[k] === array[j]) {
        match += firstString[k];
        array.splice(j, 1);
        j--;
      }
    }
    j++;
  }
  return match;
}
