/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (amount > 0) {
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);
  if (amount > 0) {
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function (amount) {
  var depositSum = 0;
  var withdrawalSum = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      withdrawalSum += this.transactions[i].amount;
    } else {
      depositSum += this.transactions[i].amount;
    }
  }
  var balance = depositSum - withdrawalSum;
  return balance;
};
