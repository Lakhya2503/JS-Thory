// ARRAY

// find larget numnber

/*

let arr = [85, 42, 87, 1, 244, 85]

let maxNum = arr[0]

for (let i = 1; i < arr.length; i++) {
    if(maxNum < arr[i]) {
        maxNum = arr[i];
    }
}

console.log({maxNum})

/*

/* ============================================================== */

// find second larget numnber
/*
let arr = [85, 42, 87, 1, 244, 99]
let maxNum = Math.max(arr[0], arr[1])
let sMaxNum = Math.max(arr[0], arr[1])

// why start loop from the 2 ..?? 
//  ** Beacuse the 2 position is already checked first declarations
for( let i = 2; i < arr.length; i++ ) { 
    if( maxNum < arr[i] ) {
        maxNum = arr[i]
    } else if ( sMaxNum < arr[i] && maxNum !== arr[i] ) {
        sMaxNum = arr[i]
    }
}

console.log({sMaxNum})
console.log({maxNum})
*/
/* ============================================================== */