/* exported equal */
function equal(first, second) {
  if (JSON.stringify(first) === JSON.stringify(second)) {
    return true;
  } else {
    return false;
  }
}
