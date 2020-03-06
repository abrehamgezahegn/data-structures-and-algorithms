const selectionSort = arr => {
  let array = arr;

  for (let i = 0; i < array.length; i++) {
    let leastIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[leastIndex]) {
        leastIndex = j;
      }
    }
    let temp = array[i];
    array[i] = array[leastIndex];
    array[leastIndex] = temp;
  }

  return array;
};

console.log(selectionSort([6, 44, 3, 1, 2, 3, 78, 12]));
