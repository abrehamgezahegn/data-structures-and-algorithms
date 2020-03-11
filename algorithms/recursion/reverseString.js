const reverseString = (string, pointer = 1) => {
  if (pointer === string.length) return string;
  let arr = string.split("");
  let moving = arr[pointer];
  let filtered = arr.filter((item, index) => {
    return index !== pointer;
  });
  let concated = [moving, ...filtered];

  return reverseString(concated.join(""), pointer + 1);
};

console.log(reverseString("sleeeeepeeeye"));
