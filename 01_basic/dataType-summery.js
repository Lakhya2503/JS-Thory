//  Primitive

//  7 types : String, Number, Boolean,  null, undefined, Symbol, BigInt

const score = 200
const scoreValue = 136.5

const isLoggedIn = false
const outsideTemp = null
let userName ;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId  );

const bigNumber = 35642482885468512n


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["Dobarman", "ganjaman", "supermarao", "nagarjun"]

let myObj = {
    name : "laxman shinde",
    age : 22
}

const myFunction = function(){
    console.log("Hello world");
}
// myFunction()
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)(copy), Heap(Non-primitive)(Refrence)

let myFullName = "laxman shinde"

let fullName = myFullName;

fullName = "lakhan patil"


// console.log(myFullName);
// console.log(fullName); //only copy method

// ---------------------
// heap 

let UserOne = {
    name : "lakhan patil",
    age : 22,
    work : "model desining",
    payment : 250000
}

console.log(UserOne) //before change

UserOne.name = "laxman shinde"
UserOne.age = 23

console.log(UserOne); //call by reference not copy , after change

