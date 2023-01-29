const { add, addAbsolute } = require("../index");

// test
test("add 2 + 3 gives 5", () => {
  // set up
  // act
  const sum = add(2, 3);

  // assert
  expect(sum).toBe(5);
});

test("absolute add -2 and 7 gives 9", () => {
  const sum = addAbsolute(-2, 7);

  expect(sum).toBe(9);
});
