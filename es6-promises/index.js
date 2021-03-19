const takeAChance = require('./take-a-chance');

const promise = takeAChance('James');

promise.then(value => {
  console.log(value);
});

promise.catch(error => {
  console.error(error.message);
});
