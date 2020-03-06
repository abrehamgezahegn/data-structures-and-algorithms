const { stackOne } = require("./stackArray");

const symbol = {
  "(": ")",
  "{": "}",
  "[": "]",
  ")": ")",
  "}": "}",
  "]": "]"
};

const validToken = token => {
  let array = token.split("");
  for (let i = 0; i < array.length; i++) {
    // we can use forEach
    if (symbol[stackOne.peak()] === symbol[array[i]]) stackOne.pop();
    else stackOne.push(array[i]);
  }

  return !Boolean(stackOne.stack.length);
};

console.log(validToken("({})"));
