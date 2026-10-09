let helloString = "hello";
let reverseHelloString = "";

for (let i = 0; i < helloString.length; i++) {
  reverseHelloString = helloString[i] + reverseHelloString;
}

console.log({
  reverseHelloString,
});
