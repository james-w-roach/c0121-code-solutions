var light = document.querySelector('.on');
var body = document.querySelector('.light');

function onClick(event) {
  if (light.className === 'on') {
    light.className = 'off';
    body.className = 'dark';
  } else {
    light.className = 'on';
    body.className = 'light';
  }
}

light.addEventListener('click', onClick);
