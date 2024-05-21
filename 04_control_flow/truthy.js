const lingam = "konchdayan"

if(lingam) { // emagin the li
    console.log(`The suprehero : ${lingam}`);
}


// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 

//reminder truthy value 


let myarray = []

if (myarray.length === 0) {
    console.log(`array was empty`);
}


let myobj = {}

if (Object.keys(myobj).length === 0) {
    console.log(`obj was empty`);
}

// ---------------------

// Nullishe colision Operator (??) : null undefined

// let val1 = 34 ?? 45;
// let val1 = null ?? 32;
// let val1 = undefined ?? 37;
// let val1 = null ?? undefined;
// let val1 = null ?? 32 ?? 67;


// console.log(val1); 


// ---------------------


// Turnry operator  (short type of else)
// condition ? true : false 

const myTeamPlyer = 20;

myTeamPlyer >= 11 ?  console.log(`Your team are not allowed`) : console.log(`Your team allowed for play`) 