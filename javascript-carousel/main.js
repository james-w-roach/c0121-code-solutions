var $box = document.querySelector('.box');
var $buttons = document.querySelector('.dot-buttons');
var $images = document.querySelector('.img-container');

var imgKids = $images.children;
var buttonKids = $buttons.children;

// var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png']; //

var i = 0;

function imageTimer() {
  if (i < 4) {
    i++;
    imgKids[i - 1].className = 'image hidden';
    buttonKids[i - 1].className = 'far fa-circle';
  } else {
    i = 0;
    imgKids[4].className = 'image hidden';
    buttonKids[4].className = 'far fa-circle';
  }
  imgKids[i].className = 'image';
  buttonKids[i].className = 'fas fa-circle';
}

var id = setInterval(imageTimer, 3000);

function changeImage(event) {
  if (event.target.getAttribute('id') === 'left') {
    i--;
    if (i < 0) {
      i = 4;
      imgKids[0].className = 'image hidden';
      buttonKids[0].className = 'far fa-circle';
    } else {
      imgKids[i + 1].className = 'image hidden';
      buttonKids[i + 1].className = 'far fa-circle';
    }
    imgKids[i].className = 'image';
    buttonKids[i].className = 'fas fa-circle';
  } else if (event.target.getAttribute('id') === 'right') {
    i++;
    if (i > 4) {
      i = 0;
      imgKids[4].className = 'image hidden';
      buttonKids[4].className = 'far fa-circle';
    } else {
      imgKids[i - 1].className = 'image hidden';
      buttonKids[i - 1].className = 'far fa-circle';
    }
    imgKids[i].className = 'image';
    buttonKids[i].className = 'fas fa-circle';
  } else {
    if (event.target.className === 'far fa-circle') {
      for (var j = 0; j < buttonKids.length; j++) {
        if (buttonKids[j].className === 'fas fa-circle') {
          buttonKids[j].className = 'far fa-circle';
          imgKids[j].className = 'image hidden';
        }
      }
      i = event.target.getAttribute('id');
      imgKids[i].className = 'image';
      buttonKids[i].className = 'fas fa-circle';
    }
  }
  clearInterval(id);
  id = setInterval(imageTimer, 3000);
}

$box.addEventListener('click', changeImage);

// event.target.className = 'fas fa-circle';
// imgKids[event.target.getAttribute('id')].className = 'image';
