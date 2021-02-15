/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var match = '';
  for (var i = 0; i < secondString.length; i++) {
    for (var j = 0; j < firstString.length; j++) {
      if (secondString[i] === firstString[j]) {
        match += secondString[i];
      }
    }
  }
  if (match === secondString) {
    return true;
  } else {
    return false;
  }
}
