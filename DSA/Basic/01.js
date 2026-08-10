// type Coercion

// console.log("1" - 1) 
// the "1" will convert into one of the substration operations that is called type Coercion
// also in *, / into
//---------------------------------------------------//

// let age = prompt("what is your age : ") use inspect mode use

//---------------------------------------------------//
// type casting 

// number to String any type of data type like boolean to string , string to number etc
// like this operation is called type casting or type convertion


//---------------------------------------------------//
// swping

let ageOne = 24;
let ageTwo = 26;
let ageThree;

console.log("befor : ", {
    ageOne,
    ageTwo
})

ageThree = ageOne;
ageOne = ageTwo;
ageTwo = ageThree;

console.log("after : ", {
    ageOne,
    ageTwo
})