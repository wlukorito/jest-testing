function arrayProcessor(arr) {
  if (arr.length === 0) return {};

  // variable declaraions
  const squares = [];
  const strings = [];
  let i = 0;

  // loop through input array 0
  while (arr[i]) {
    const currentValue = arr[i++];
    const typeOfCurrent = typeof currentValue;
    switch (typeOfCurrent) {
      case "object":
        throw new Error("Invalid input");
      case "function":
        break;
      case "number":
        squares.push(currentValue * currentValue);
        break;
      case "string":
        strings.push(currentValue);
        break;
    }
  }

  return {
    squares,
    strings,
    index: i === arr.length ? -1 : i,
  };
}

module.exports = arrayProcessor;
