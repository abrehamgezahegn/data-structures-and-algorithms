let count_1 = 0;
const fibonacci = (n) => {
  if (n < 2) return n;
  count_1++;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// console.log("uncached fib value is ", fibonacci(10), count_1);

// Fibonacci series calculation have O(n^2)
// this is because we do calculations for the same value over and
// over again

/*
    Example - getting the 4th fibonacci


                                4 
                        3                2*
                   2         1*      1*       0*
                1     0             

            here we are recalculating for 1,1,2 and 0. Which we could've avoided (cached). 



*/

// we can get O(n^2) to  O(n) if we apply caching.

let count = 0;
const fibonacciCached = () => {
  const cache = {};
  return function fibonacci(n) {
    if (n in cache) return cache[n];

    if (n < 2) {
      return n;
    }
    count++;
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  };
};

const getFib = fibonacciCached();

// console.log("cached fib", getFib(10), "count is", count);

// We can also do this with out recursion
// which i think makes much more sense and is very simple

// it is called bottom up approach

const fibonacciBA = (n) => {
  let fibs = [1, 1];
  // pre-define our default values

  // start from 2 and fill the array with the series [1,1,2,3,5,...]
  // until we reach n
  for (let i = 2; i < n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }

  // return the last item
  return fibs.pop();
};

console.log(fibonacciBA(7));

// 1,1,2,3,5,8,13,21,34,55
