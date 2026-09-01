let arr = [9, 5, 6, 7, 2];

let timesOfRuns = arr.length - 1;

for (let i = 0; i < timesOfRuns; i++) {
  for (let j = 0; j < timesOfRuns - i; j++) {
    if (arr[j] < arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log("arr", arr);
