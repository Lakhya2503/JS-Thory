// Function calling itself is called recursion

//  base case

const factorial = function (fact) {
  if (fact === 0 || fact === 1) {
    return 1;
  }
  return fact * factorial(fact - 1);
};

// const result = factorial(5);
// console.log("result : ", result);

// this example fib number start from 1 not from 0
// basically this example show fib 1st number is 1
const fib = function (fibNum) {
  if (fibNum === 1 || fibNum === 2) {
    return 1;
  }

  return fib(fibNum - 1) + fib(fibNum - 2);
};
let num = 8;
const result = fib(num);

console.log(`FIB OF ${num}th number is : ${result}`);
