function printRecursionNumber(lowerNum, upperNum) {
  if (lowerNum > upperNum) return;

  printRecursionNumber(lowerNum + 1, upperNum);
  console.log("lower Number : ", lowerNum);
}

printRecursionNumber(1, 5);
