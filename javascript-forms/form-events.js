function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event target:', event.target.name);
}

function blur(event) {
  console.log('blur event was fired');
  console.log('event target:', event.target.name);
}

function handleInput(event) {
  console.log('target name:', event.target.name);
  console.log('value:', event.target.value);
}

var user = document.querySelector('#user-name');
var email = document.querySelector('#user-email');
var message = document.querySelector('#user-message');

user.addEventListener('focus', handleFocus);
user.addEventListener('blur', blur);
user.addEventListener('input', handleInput);

email.addEventListener('focus', handleFocus);
email.addEventListener('blur', blur);
email.addEventListener('input', handleInput);

message.addEventListener('focus', handleFocus);
message.addEventListener('blur', blur);
message.addEventListener('input', handleInput);
