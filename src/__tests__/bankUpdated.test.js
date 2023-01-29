const bank = require("../bankUpdated");
const { withdraw } = bank;

describe("withdraw", () => {
  it("throws if wrong account", () => {
    expect(() => withdraw("we")).toThrow("Incorrect account");
  });

  it("throws if not enough money", () => {
    expect(() => withdraw(1, 800)).toThrow(
      "Not enough funds to complete transaction"
    );
  });

  it("throws if amount is less than 0", () => {
    expect(() => withdraw(1, -200)).toThrow("Amount must be greater than zero");
  });

  //TODO: assert method inside class instance is called
  it("debits the account with correct amount", () => {
    const bal = withdraw(2, 200);

    expect(bal).toEqual(1800);
  });

  xit("records and logs transaction history", () => {
    jest.spyOn(bank, "logger");
    const logger = jest.fn(() => console.log("logger"));
    expect(withdraw(3, 100)).toBe(2900);
    expect(logger).toHaveBeenCalled();
  });
});
