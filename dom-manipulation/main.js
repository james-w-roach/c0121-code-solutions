var clicks = 0;
var button = document.querySelector('.hot-button');
var count = document.querySelector('.click-count');

function onClick(event) {
  clicks++;
  count.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    button.className = 'hot-button cold';
  } else if (clicks < 7) {
    button.className = 'hot-button cool';
  } else if (clicks < 10) {
    button.className = 'hot-button tepid';
  } else if (clicks < 13) {
    button.className = 'hot-button warm';
  } else if (clicks < 16) {
    button.className = 'hot-button hot';
  } else {
    button.className = 'hot-button nuclear';
  }
}

button.addEventListener('click', onClick);
