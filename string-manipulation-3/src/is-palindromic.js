/* exported isPalindromic */
function isPalindromic(string) {
  var test = '';
  for (var i = (string.length - 1); i >= 0; i--) {
    test += string[i];
  }
  if (test === string) {
    return true;
  } else {
    return false;
  }
}
