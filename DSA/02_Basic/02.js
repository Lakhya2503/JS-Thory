// Electricity bill
// 0 to 100 -> 10rs/unit
// 101 to 200 -> 13rs/unit
// 201 to 300 -> 15rs/unit
// 301 to 400 -> 18rs/unit
// 400 above -> 20rs/unit


let electricityUnit = 400;
let electricityBill;
let unit = 0;
let remaningUnit;
let perUnitRate = 0;


if(400 <= electricityUnit) {
    unit = electricityUnit
    remaningUnit = unit - 400
    electricityBill = remaningUnit * 20 + ( 100 * 18 ) + ( 100 * 15 ) + ( 100 * 13 ) + ( 100 * 10 )
} else if ( 399 >= electricityUnit && 301 >= electricityUnit ) {
    unit = electricityUnit
    remaningUnit = unit - 300
    electricityBill = remaningUnit * 18 + ( 100 * 15 ) + ( 100 * 13 ) + ( 100 * 10 )
} else if ( 300 >= electricityUnit && 201 >= electricityUnit ) {
    unit = electricityUnit
    remaningUnit = unit - 200
    electricityBill = remaningUnit * 15  + ( 100 * 13 ) + ( 100 * 10 )
} else if ( 200 >= electricityUnit && 101 >= electricityUnit ) {
    unit = electricityUnit
    remaningUnit = unit - 100
    electricityBill = remaningUnit *  13  + ( 100 * 10 )
} else if ( 100 >= electricityUnit ) {
    unit = electricityUnit
    remaningUnit = unit - 100
    electricityBill = remaningUnit *  10 
} else {
    console.log(`WRONG INPUT`)
}

console.log(`Your electricity bill is for ${electricityUnit} units, and your total bill is ₹${electricityBill}.00.`);




