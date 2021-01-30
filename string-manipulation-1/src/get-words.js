/* exported getWords */
function getWords(string) {
  if (string.length > 2) {
    var array = string.split(' ');
  } else {
    array = string.split();
  }
  return array;
}
