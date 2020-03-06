// question - identify first recurring character
// input - array of entries
// output - first recurring entry
// assumptions - could be either sorted or not &&
//             - any data type
//             -

// The naive way would be to do a nested for loop
// We won't do that because of O(n^2);

// we will implement hash tables

function firstRecurring(input) {
  //   check for invalid and easy inputs
  if (!Array.isArray(input)) return undefined;
  if (!input) return undefined;
  if (input.length === 0) return undefined;

  let hash = {};
  for (let i = 0; i < input.length; i++) {
    if (hash[input[i]]) return input[i];
    hash[input[i]] = true;
  }
  return undefined;
}

console.log(firstRecurring([1, 3, 3, 1, 2, 4, 5]));
