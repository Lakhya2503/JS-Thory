// left roation of 1 
/*
let myArray = [ 1, 2, 3, 4, 5, 6, 7 ];

let copyIndex = myArray[0];

for(let i = 0; i < myArray.length - 1; i++) {
    myArray[i] = myArray[i + 1] // output expected
}

myArray[myArray.length - 1] = copyIndex

console.log( myArray )

*/

/* =============================================================== */


// right rotation of 1
/*
let myArray = [ 1, 2, 3, 4, 5, 6, 7 ];

let copyIndex = myArray[myArray.length - 1];

for ( let i = myArray.length - 1 ; i > 0; i --) {
    myArray[i] = myArray[i-1]
}

myArray[0] = copyIndex

console.log({ myArray })

*/

/* =============================================================== */

/* Nested Loops */

/*
for(let i = 1; i <= 5; i++){
     console.log(`${i}th execution`)
    for(let j = 1; j <= 5; j++){
        console.log(`${j}th values of i : ${i} character : ${j}`)
    }
}
*/

/* =============================================================== */
