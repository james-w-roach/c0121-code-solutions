var num1 = 1776;
var num2 = 2;
var num3 = 47;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximum value:', maximumValue);

var heroes = [
  'Batman',
  'Spider-Man',
  'Iron Man',
  'Hulk'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('random index:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);

var library = [
  {
    title: 'Ready Player One',
    Author: 'Ernest Cline'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  }
];

var lastBook = library.pop();
console.log('last book:', lastBook);

var firstBook = library.shift();
console.log('first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library array:', library);

var fullName = 'James Roach';
var firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('say my name:', sayMyName);
