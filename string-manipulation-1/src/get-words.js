/* exported getWords */
function getWords(string) {
  if (string.length > 0) {
    var array = string.split(' ');
  } else {
    array = string.split('');
  }
  return array;
}
