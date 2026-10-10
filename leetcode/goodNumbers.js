// 1922. Count Good Numbers

const MODE = Math.pow(10, 9) + 7;

function power(x, n, mode) {
  if (n === 0) return 1;
  let half = power(x, Math.floor(n/2), mode);
  let result = (half * half) % mode;
  if (n % 2 === 1) {
    result = (result * x) % mode;
  }
  return result;
}

var countGoodNumbers = function (n) {
  let evenCount = Math.floor((n + 1) / 2);
  let oddCount = Math.floor(n / 2);
  return (power(4, oddCount, MODE) * power(5, evenCount, MODE)) % MODE;
};

const result = countGoodNumbers(50);
console.log({
  result,
});
