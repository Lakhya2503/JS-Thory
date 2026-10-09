let selectionArry = [7, 9, 6, 2, 3, 1, 4, 5];
let lengthOfArray = selectionArry.length;

for (let i = 0; i < lengthOfArray - 1; i++) {
  let minIndex = i;
  for (let j = i+1; j < lengthOfArray; j++) {
    if (selectionArry[minIndex] > selectionArry[j]) {
      minIndex = j;
    }
  }
  if (minIndex != i) {
    let temp = selectionArry[minIndex];
    selectionArry[minIndex] = selectionArry[i];
    selectionArry[i] = temp;
  }
}

console.log({
  selectionArry,
});
