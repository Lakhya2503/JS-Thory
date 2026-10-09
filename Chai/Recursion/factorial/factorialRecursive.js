const recursiveFactorial = function (num) {
  if (num === 0 || num === 1) return 1;
  return num * recursiveFactorial(num - 1);
};

const result = recursiveFactorial(6);
console.log({
  result,
});
