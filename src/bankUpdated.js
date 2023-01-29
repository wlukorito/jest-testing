class Account {
  constructor(account, currentBalance) {
    this.account = account;
    this.currentBalance = currentBalance;
  }

  transactionHistory = new Map();

  debitAccount(amount) {
    const newBalance = this.currentBalance - amount;
    // log transaction
    this.transactionHistory.set(new Date().toLocaleString(), {
      prevBal: this.currentBalance,
      newBalance,
    });
    // update balance
    this.currentBalance = newBalance;
    return this.currentBalance;
  }

  getBalance() {
    return this.currentBalance;
  }

  getAccountNumber() {
    return this.account;
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}

const accounts = [
  new Account(1, 1000),
  new Account(2, 2000),
  new Account(3, 3000),
  new Account(4, 4000),
  new Account(5, 5000),
  new Account(6, 6000),
  new Account(7, 7000),
];

function withdraw(account, amount) {
  //check if account exists
  const targetAccount = accounts.find(
    (acc) => acc.getAccountNumber() === account
  );
  if (!targetAccount) {
    throw new Error("Incorrect account");
  }
  //amount be positive
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }
  //check account has enough money
  if (targetAccount.getBalance() - amount <= 200) {
    throw new Error("Not enough funds to complete transaction");
  }
  //debit account
  targetAccount.debitAccount(amount);
  //log transaction
  logger(targetAccount.getTransactionHistory());

  return targetAccount.getBalance();
}

function logger(transactionHistory) {
  console.log({ transactionHistory });
}

module.exports = { withdraw, logger };
