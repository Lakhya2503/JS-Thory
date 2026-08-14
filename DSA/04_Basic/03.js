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