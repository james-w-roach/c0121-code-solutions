function convertMinutesToSeconds(minutes) {
  return (minutes * 60);
}

var mtsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result:', mtsResult);

function greet(name) {
  return ('Hey, ' + name);
}

var greetResult = greet('Joe');
console.log('greet result:', greetResult);

function getArea(width, height) {
  return (width * height);
}

var areaResult = getArea(17, 42);
console.log('getArea result:', areaResult);

function getFirstName(person) {
  return (person.firstName);
}

var getFirstNameResult = getFirstName({ firstName: 'Indiana', lastName: 'Jones' });
console.log('getFirstName result:', getFirstNameResult);

function getLastElement(array) {
  return (array[array.length - 1]);
}

var getLastElementResult = getLastElement(['red', 'green', 'blue']);
console.log('getLastElement result:', getLastElementResult);
