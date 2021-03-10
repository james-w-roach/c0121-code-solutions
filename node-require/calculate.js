const add = require('./add');
const multiply = require('./multiply');
const subtract = require('./subtract');
const divide = require('./divide');

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  console.log('result:', add(x, y));
} else if (process.argv[3] === 'minus') {
  console.log('result:', subtract(x, y));
} else if (process.argv[3] === 'over') {
  console.log('result:', divide(x, y));
} else if (process.argv[3] === 'times') {
  console.log('result:', multiply(x, y));
}
