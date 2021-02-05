var array = [
  {
    isbn: '123',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling'
  },
  {
    isbn: '456',
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    isbn: '789',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  }
];

console.log('array:', array);
console.log('typeof array:', typeof array);

var string = JSON.stringify(array);
console.log('JSON string:', string);
console.log('type of JSON string:', typeof string);

var string2 = '{"Number id": "123456789", "name": "James"}';
console.log('JSON string 2:', string2);
console.log('typeof JSON string 2:', typeof string2);

var newObject = JSON.parse(string2);
console.log('new object:', newObject);
console.log('typeof new object:', typeof newObject);
