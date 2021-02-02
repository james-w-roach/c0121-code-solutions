var open = document.querySelector('.open');
var close = document.querySelector('.no');
var overlay = document.querySelector('.hidden');

function onClick(event) {
  if (overlay.className === 'hidden') {
    overlay.className = 'visible';
  } else {
    overlay.className = 'hidden';
  }
}

open.addEventListener('click', onClick);
close.addEventListener('click', onClick);
