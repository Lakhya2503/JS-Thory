const reversHelloStringRecursiveFucn = function (s) {
  if (s.length <= 1) {
    return s;
  }
  return reversHelloStringRecursiveFucn(s.slice(1)) + s[0] ;
};

const reversString = reversHelloStringRecursiveFucn("hello");
console.log({
  reversString,
});
