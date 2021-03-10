var $box = document.querySelector('.box');
var $buttons = document.querySelector('.dot-buttons');
var $images = document.querySelector('.img-container');
var imgKids = $images.children;
var buttonKids = $buttons.children;

var i = 0;

function determineI() {
  if (event.target.className === 'far fa-circle') {
    i = event.target.getAttribute('id');
  } else if (event.target.getAttribute('id') === 'left') {
    if (i !== 0) {
      i--;
    } else {
      i = (buttonKids.length - 1);
    }
  } else if (event.target.getAttribute('id') === 'right') {
    if (i !== (buttonKids.length - 1)) {
      i++;
    } else {
      i = 0;
    }
  }
}

function changeImage() {
  determineI();
  for (var j = 0; j < buttonKids.length; j++) {
    if (buttonKids[j] !== buttonKids[i]) {
      imgKids[j].className = 'image hidden';
      buttonKids[j].className = 'far fa-circle';
    }
  }
  imgKids[i].className = 'image';
  buttonKids[i].className = 'fas fa-circle';
  clearInterval(id);
  id = setInterval(imageTimer, 3000);
}


function imageTimer() {
  if (i < (buttonKids.length - 1)) {
    i++;
    imgKids[i - 1].className = 'image hidden';
    buttonKids[i - 1].className = 'far fa-circle';
  } else {
    i = 0;
    imgKids[buttonKids.length - 1].className = 'image hidden';
    buttonKids[buttonKids.length - 1].className = 'far fa-circle';
  }
  imgKids[i].className = 'image';
  buttonKids[i].className = 'fas fa-circle';
}

var id = setInterval(imageTimer, 3000);

$box.addEventListener('click', changeImage);
