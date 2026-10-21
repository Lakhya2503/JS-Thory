// Function calling itself is called recursion

//  base case

const factorial = function (fact) {
  if (fact === 0 || fact === 1) {
    return 1;
  }
  return fact * factorial(fact - 1);
};

const result = factorial(5);
console.log("result : ", result);
