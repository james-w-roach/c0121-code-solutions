var student = {
  firstName: 'James',
  lastName: 'Roach',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Lamborghini',
  model: 'Sesto Elemento',
  year: 2010
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Augie',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
