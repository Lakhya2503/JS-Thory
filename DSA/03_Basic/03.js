/*
process.stdout.write("laxman ")
process.stdout.write("shinde")
*/

/* ================================ */

let prompt = require("prompt-sync")();

let num = prompt("Enter a Number : ");

for(let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(' u ')
    }
    console.log()
}
console.log()