// Revers Array part 1
/*
let array = [ 1, 2, 3, 4, 5]
let newArray = new Array(array.length)

let j = 0

for (let i = array.length - 1; i >= 0; i--) {
    newArray[j] = array[i]
    j++
}

console.log({ newArray })
*/
/* ======================================================================== */

// Revers Array part 2
// means no extra array created

/*
let array = [ 1, 2, 3, 4, 5]
let i = 0;
let j = array.length - 1;

while( i !== j ) {
    let tempopraryArray = array[i]
    array[i] = array[j]
    array[j] = tempopraryArray
    i++;
    j--;
}

console.log({ array })
*/

/* ======================================================================== */

// all 0 in left and all 1 in right side
/*
let myArray = [ 0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0 ]
let i = 0;
let j = 0;

while( i < myArray.length ) {
    if( myArray[i] !== 0 ) {
        let tempopraryArrayElement = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = tempopraryArrayElement;
        j++;
    }
    i++
}

console.log({ myArray })
*/
/* ======================================================================== */