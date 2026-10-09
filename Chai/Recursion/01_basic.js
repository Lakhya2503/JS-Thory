function printRecursiveNumber(lowerNum, upperNum) {
  if (lowerNum >= upperNum) return;

  console.log("lower number : ", lowerNum);
  printRecursiveNumber(lowerNum + 1, upperNum);
}

printRecursiveNumber(1, 4);
