const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (numbers.reduce((accumulator, currentValue) => accumulator + currentValue));
console.log('sum:', sum);

const product = (numbers.reduce((accumulator, currentValue) => accumulator * currentValue));
console.log('product:', product);

const initialBalance = 0;
const balance = (account.reduce((accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    accumulator += currentValue.amount;
  } else {
    accumulator -= currentValue.amount;
  }
  return accumulator;
}, initialBalance));
console.log('balance:', balance);

const initialObject = {};
const composite = (traits.reduce((accumulator, currentValue) => {
  Object.assign(accumulator, currentValue);
  return accumulator;
}, initialObject));
console.log(composite);
