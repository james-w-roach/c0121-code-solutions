var $box = document.querySelector('.box');
var $buttons = document.querySelector('.dot-buttons');
var $images = document.querySelector('.img-container');
var imgKids = $images.children;
var buttonKids = $buttons.children;

// var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png']; //

var counter = 0;

function leftOrRight(event) {
  if (event.target.getAttribute('id') === 'left') {
    counter--;
    if (counter < 0) {
      counter = 4;
      imgKids[0].className = 'image hidden';
      buttonKids[0].className = 'far fa-circle';
    } else {
      imgKids[counter + 1].className = 'image hidden';
      buttonKids[counter + 1].className = 'far fa-circle';
    }
    imgKids[counter].className = 'image';
    buttonKids[counter].className = 'fas fa-circle';
  } else if (event.target.getAttribute('id') === 'right') {
    counter++;
    if (counter > 4) {
      counter = 0;
      imgKids[4].className = 'image hidden';
      buttonKids[4].className = 'far fa-circle';
    } else {
      imgKids[counter - 1].className = 'image hidden';
      buttonKids[counter - 1].className = 'far fa-circle';
    }
    imgKids[counter].className = 'image';
    buttonKids[counter].className = 'fas fa-circle';
  }
}

$box.addEventListener('click', leftOrRight);

function blah(event) {
  for (var i = 0; i < buttonKids.length; i++) {
    if (buttonKids[i]) {
      imgKids[counter].className = 'image hidden';
      buttonKids[counter].className = 'far fa-circle';
    } else {
      imgKids[counter].className = 'image';
      buttonKids[counter].className = 'fas fa-circle';
    }
  }
}

$buttons.addEventListener('click', blah);
