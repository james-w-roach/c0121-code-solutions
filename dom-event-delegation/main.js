var task = document.querySelector('.task-list');

function onClick(event) {
  console.log('event target:', event.target);
  console.log('tag name:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('closest task list item:', closest);
    closest.remove();
  }
}

task.addEventListener('click', onClick);
