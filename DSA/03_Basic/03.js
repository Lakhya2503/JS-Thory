/*
process.stdout.write("laxman ")
process.stdout.write("shinde")
*/

/* =========================================================== */

let prompt = require("prompt-sync")();
let num = prompt("Enter a Number : ");

/* =========================================================== */

//  + + + + 
//  + + + + 
//  + + + + 
//  + + + + 

/*
for(let i = 1; i <= num; i++) { //rows
    for (let j = 1; j <= num; j++) { // columms
        process.stdout.write(' + ')
    }
    console.log()
}
*/

/* =========================================================== */

//  +
//  + +
//  + + +
//  + + + +

/*
for( let i = 0; i <= num; i++ ) { // rows
    for( let j = 0; j <= i; j++ ) { // columns
        process.stdout.write(' + ');
    }   
    console.log();
}
*/
/* =========================================================== */