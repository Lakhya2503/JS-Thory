// controll flow


// if (true) { //when condition is true then scope of the code while otherwise doesn't run the code
//     console.log(`This is your print line`);
// }

// <, >, <=, >=, == , !==, === 

// let child = 17;
// let adult = 18;
// let old = 60;

// let age = 5;

// if(old <= age) {
//     console.log(`your a old`);
// } else if (adult <= age) {
//     console.log(`your a adult`);
// }else{
//     console.log(`your a child`);
// }

// ---------------------------------------------------------------------------

// // let EndScore = 2000; 
// let myscore = 520;
// let fatherActive =  500;
 
// if (myscore >= fatherActive ) {
//     console.log(`you can fly now this score: ${myscore}`);
// } else {
//     console.log(`Uff your Score was low not acess ${myscore}`);
// }


// ---------------------------------------------------------------------------


const score = 5000
// if(score  < 60000) console.log(`greater than`) ,console.log(`greter2`); but do not use this inmature code

// ---------------------------------------------------------------------------

let userUpiApp = true
let userCriditCard = true

let userPoint = false
let userMoney = true


if(userCriditCard && userUpiApp) { //checck both condition
    console.log(`buy anything`);
}

if(userPoint || userMoney) { //check one condition
    console.log(`what do you wan't sir...?`);
}

