let bubbleArr = [5, 7, 8, 1, 2, 6, 4, 3, 9];
let arrayLength = bubbleArr.length;
let j = 0;

for (let i = 0; i < arrayLength; i++) {
    console.log("arrayLength i", bubbleArr[i])
    for (let j = 0; j < arrayLength - 1; j++) {
       if(bubbleArr[j] > bubbleArr[ j + 1]) {
            let temp = bubbleArr[ j + 1];
            bubbleArr[j + 1] = bubbleArr[j]
            bubbleArr[j] = temp
       }
    }
}

console.log({
  bubbleArr,
});
