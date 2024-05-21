
// console.log(2 > 1); //true
// console.log(2 < 1); //false
// console.log(2 >= 1); //true
// console.log(2 <= 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true

// console.log("2" > 0); //true
// console.log("02" > 1); //true

// console.log(null > 0); flase
// console.log(null == 0) //false
// console.log(null >= 0); //true

// The reason is that an equality check == and comparisons > <>= <= work differently.
// Comparisons convert null to a number, treating as a 0.
// That's whay (3)null >=0 is true and (1) null > 0 is false.


// console.log(undefined == 0); //flase
// console.log(undefined >= 0); //false
// console.log(undefined > 0); //false


// ===

console.log("2" === 2); //flase //=== check dataType also 

