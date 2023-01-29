const withdraw = (amount, accountNumber, balance, currency) => {
  if (typeof accountNumber !== "number")
    throw new Error("Invalid account number");

  if (amount > balance) throw new Error("Insufficient balance");

  return balance - amount;
};

const deposit = () => undefined;

module.exports = { withdraw, deposit };
