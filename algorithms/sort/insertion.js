// code worked on first try :) :) :) :).
// this is happiness

// not really sure if this is insertions sort tho.

const insertionSort = arr => {
  let array = [...arr, ...arr, ...arr, ...arr];
  let counter = 0; //extra: to keep  track of how many steps we took

  for (let j = 0; j < array.length; j++) {
    let i = j + 1;
    while (array[i - 1] && array[i - 1] > array[i]) {
      counter++;
      [array[i - 1], array[i]] = [array[i], array[i - 1]];
      i--;
    }
  }

  return { array, counter, length: array.length };
};

// console.log(
//   insertionSort([
//     8,
//     4,
//     2,
//     10,
//     6,
//     1,
//     100,
//     12,
//     155,
//     163,
//     32,
//     623,
//     65,
//     87,
//     23,
//     12,
//     45,
//     57,
//     16,
//     0
//   ])
// );

console.log(insertionSort([4, 5, 6, 1, 1]));
