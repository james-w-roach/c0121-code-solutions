/* exported countdown */
function countdown(number) {
  var array = [];
  var num = number;
  while (num >= 0) {
    array.push(num);
    num--;
  }
  return array;
}
