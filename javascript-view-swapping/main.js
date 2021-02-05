var $container = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

function onClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if (event.target === $tabList[i]) {
        $tabList[i].className += ' active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
    var data = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewList.length; j++) {
      if ($viewList[j].getAttribute('data-view') === data) {
        $viewList[j].className = 'view';
      } else {
        $viewList[j].className = 'hidden';
      }
    }
  }
}

$container.addEventListener('click', onClick);
