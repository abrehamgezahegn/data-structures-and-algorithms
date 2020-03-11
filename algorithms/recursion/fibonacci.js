const fibonacci = num => {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

// console.log(fibonacci(4000));

const fibonacci2 = num => {
  let series = [0, 1];
  for (i = 2; i <= num; i++) {
    series.push(series[i - 2] + series[i - 1]);
  }

  return series[num];
};

// console.log(fibonacci2(4000));
// 0 1 1 2 3 5 8 13
