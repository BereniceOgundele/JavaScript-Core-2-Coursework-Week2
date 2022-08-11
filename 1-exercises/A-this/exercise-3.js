/*

  Complete the "deposit" and "withdraw" methods on the "bankAccount"
  object. Each method will take 1 parameter, "amount", which will either be
  added to or subtracted from the "currentAmount".

*/

let bankAccount = {
  currentAmount: 100,
  deposit: function (amount) {
    this.deposit = this.deposit + 50;
  },
  withdraw: function (amount) {
    this.withdraw = this.withdraw - 25;
  },
};

console.log(bankAccount.deposit);
console.log (bankAccount.withdraw);


// DO NOT EDIT BELOW THIS LINE
bankAccount.deposit(50);
console.log(
  `Expected Result: 150. Actual result: ${bankAccount.currentAmount}`
);

bankAccount.withdraw(25);
console.log(
  `Expected Result: 125. Actual result: ${bankAccount.currentAmount}`
);
