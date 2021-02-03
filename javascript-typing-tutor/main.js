var chars = document.querySelector('.hi');

function type(event) {
  chars.className = 'correct';
}

chars.addEventListener('keydown', type);
