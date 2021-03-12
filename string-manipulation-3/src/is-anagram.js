/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var array = [];
  var spaceless1 = '';
  var spaceless2 = '';
  var match = '';
  var i = 0;
  while (i < secondString.length) {
    if (secondString[i] !== ' ') {
      array.push(secondString[i]);
      spaceless2 += secondString[i];
    }
    i++;
  }
  for (var l = 0; l < firstString.length; l++) {
    if (firstString[l] !== ' ') {
      spaceless1 += firstString[l];
    }
  }
  if (spaceless1.length !== spaceless2.length) {
    return false;
  }
  var j = 0;
  while (j < array.length) {
    for (var k = 0; k < firstString.length; k++) {
      if (firstString[k] !== ' ') {
        spaceless1 += firstString[k];
      }
      if (firstString[k] === array[j]) {
        match += firstString[k];
        array.splice(j, 1);
        j--;
      }
    }
    j++;
  }
  if (match === spaceless2) {
    return true;
  } else {
    return false;
  }
}
