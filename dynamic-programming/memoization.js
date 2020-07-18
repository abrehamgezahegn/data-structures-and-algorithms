const calculate = (n) => {
  const someTimeInTheFuture = Date.now() + 2000;
  console.log("doing some heavy work");
  while (Date.now() < someTimeInTheFuture) {
    // do some calculation
  }

  return n + 10;
};

// calculate();

const cache = {};

const heavyWork = () => {
  console.log("doing some heavy work");
  const someTimeInTheFuture = Date.now() + 2000;
  while (Date.now() < someTimeInTheFuture) {
    // do some calculation
  }
};

const memoizedCalculate = (n) => {
  // check if we have a cached solution
  if (n in cache) return cache[n];

  // else do the calculation and cache the solution for later use
  heavyWork();
  const result = n + 10;
  cache[n] = result;
  return n + 10;
};

// console.log(memoizedCalculate(10));
// console.log(memoizedCalculate(11));
// console.log(memoizedCalculate(10));

/*


// the above code have "cache" as a global variable,
// we can't allow that.
// Closure to the rescue. It creates a local execution context for as
// and we can implement it as below :)



*/
const memoizedCalculateImproved = () => {
  const cache = {};

  return memoizedCalculate;
};

const memoized = memoizedCalculateImproved();

console.log("1", memoized(5));
console.log("2", memoized(5));
