const arrayProcessor = require("../arrayProcessor");

const fn = () => undefined;

test("returns {} for [] input", () => {
  expect(arrayProcessor([])).toStrictEqual({});
});

test("throws error if input contains object", () => {
  // set up
  const arr2 = [3, { a: "gods" }, fn, "", 4];

  // act & assert
  expect(() => arrayProcessor(arr2)).toThrow("Invalid input");
});

test("skips value if it is a function", () => {
  const arr3 = [fn, 2];

  const result = arrayProcessor(arr3);

  expect(result.squares[0]).toBe(4);
  expect(result.index).toBe(-1);
  expect(result.strings).toStrictEqual([]);
});

test("correctly isolates strings and numbers", () => {
  const arr = [2, 3, "lady", "umama"];

  const result = arrayProcessor(arr);

  expect(result.squares.length).toBe(2);
  expect(result.strings.length).toBe(2);
  expect(result.index).toBe(-1);
  expect(result.squares).toStrictEqual([4, 9]);
  expect(result.strings).toStrictEqual(["lady", "umama"]);
});

test("exits if value is falsy", () => {
  const arr = [2, "alice", 6, 7, "jane", false, 45, "june"];

  const result = arrayProcessor(arr);

  expect(result.index).toBe(5);
  expect(result.squares.length).toBe(3);
  expect(result.strings.length).toBe(2);
});
