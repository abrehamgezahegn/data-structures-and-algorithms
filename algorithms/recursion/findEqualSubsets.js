// I have no idea how this code is working. Probably will need my whole life to figure it out.
// or a minute.

// code has edge cases. this is sad

const canPartitionKSubsets = (nums, k) => {
  // hold the sum of all the items in the array.
  let sum = nums.reduce((a, b) => a + b);

  // target seems to be the total / the  number of subsets.
  let target = sum / k;

  // fill subset array with zeros
  let subset = new Array(k).fill(0);

  // well same shit here
  let taken = new Array(k).fill(false);

  // seems like this are the base cases of the recursion.
  if (k == 1) return true;
  if (nums.length - 1 < k) return false;
  if (sum % k != 0) return false;

  let recur = function(subset, taken, subsetIndex, from) {
    if (subset[subsetIndex] == target) {
      if (subsetIndex + 1 == k - 1) return true; // only 1 subset left
      return recur(subset, taken, subsetIndex + 1, 0);
    }

    for (let i = from; i < nums.length; i++) {
      if (taken[i]) continue;
      if (subset[subsetIndex] + nums[i] <= target) {
        taken[i] = true;
        subset[subsetIndex] += nums[i];
        if (recur(subset, taken, subsetIndex, i + 1)) return true;
        // reset
        taken[i] = false;
        subset[subsetIndex] -= nums[i];
      }
    }
    return false;
  };

  return recur(subset, taken, 0, 0, 0);
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, , 31], 4));
console.log(canPartitionKSubsets([3, 3, 3, 3], 4));
