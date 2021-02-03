var form1 = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var values = {
    name: form1.elements.name.value,
    email: form1.elements.email.value,
    message: form1.elements.message.value
  };
  console.log('values:', values);
  form1.reset();
}

form1.addEventListener('submit', handleSubmit);
