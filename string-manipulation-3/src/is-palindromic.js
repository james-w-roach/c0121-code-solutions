/* exported isPalindromic */
function isPalindromic(string) {
  var test = '';
  var spaceless = '';
  for (var i = (string.length - 1); i >= 0; i--) {
    if (string[i] === ' ') {
      continue;
    } else {
      test += string[i];
      spaceless = string[i] + spaceless;
    }
  }
  if (test === spaceless) {
    return true;
  } else {
    return false;
  }
}
