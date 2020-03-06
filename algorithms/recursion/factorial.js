const factorialOfR = num => {
  // recursion method
  console.log(num);
  if (num === 1) return 1;

  return num * factorialOfR(num - 1) * 1;
};

const factorialOfL = num => {
  // loop method
  let result = 1;
  while (num > 0) {
    result = result * num--;
  }
  return result;
};

console.log(factorialOfR(4));
