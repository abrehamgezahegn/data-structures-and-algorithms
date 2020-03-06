const bubbleSortNested = arr => {
  let array = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (array[j] > array[j + 1]) {
        // swap using temp
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;

        // or swap like a boss
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
};

// little bit efficient than nested for loop,
// but little more complicated obvi.
const bubbleSort = arr => {
  let array = arr;
  let i = 0; // we only need this for the code to work
  let passed = 0; // also this
  let steps = 0; // extra
  let total = 0; // extra
  while (1) {
    if (passed === array.length)
      // our base case: when are checked the array array.length times
      return { sorted: array, swaps: steps, total, arrayLength: array.length };
    if (i === array.length) i = 0; // when we reach the array end
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      passed = 0;
      steps++;
    } else {
      passed++;
    }
    i++;
    total++;
  }
};

console.log(bubbleSort([2, 4, 10, 5, 1, 1, 5, 151, 1]));
