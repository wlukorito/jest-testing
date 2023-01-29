const { withdraw, deposit } = require("../bank");

test("throws error if account number is invalid", () => {
  expect(() => withdraw(200, "2034", 1000, "USD")).toThrow(
    "Invalid account number"
  );
});

test("throws insufficient balance error if balance less than amount", () => {
  expect(() => withdraw(2000, 1234, 1000, "USD")).toThrow(
    "Insufficient balance"
  );
});

test("gives 1000 balance after withdrawal of 1000", () => {
  expect(withdraw(1000, 1234, 2000, "USD")).toEqual(1000);
});
