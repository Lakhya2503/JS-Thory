function iterativeSum(arr) {
  if (arr.length === 0) return 0;

  console.log(arr[0]);

  return Number(arr[0]) + iterativeSum(arr.slice(1));
}

const result = iterativeSum([3, 22, 255, 523]);
console.log({
  result,
});
