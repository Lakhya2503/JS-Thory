let insertionArray = [5, 9, 4, 25, 7, 97, 5451, 121];
let lengthOfArray = insertionArray.length;

for (let i = 1; i < lengthOfArray; i++) {
  let key = insertionArray[i];
  let j = i - 1;
  while (j >= 0 && insertionArray[j] > key) {
    insertionArray[j + 1] = insertionArray[j];
    j--;
  }
  insertionArray[j + 1] = key;
}

console.log({
  insertionArray,
});
