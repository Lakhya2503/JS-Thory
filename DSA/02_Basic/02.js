// Electricity bill
// 0 to 100 -> 10rs/unit
// 101 to 200 -> 13rs/unit
// 201 to 300 -> 15rs/unit
// 301 to 400 -> 18rs/unit
// 400 above -> 20rs/unit


let electricityUnit;
let electiryBill;
let unit = 0;
let remaningUnit;
let perUnitRate = 0;


if(400 < electricityUnit) {
    unit = electricityUnit
    remaningUnit = unit - 400
    electiryBill = remaningUnit * 20 + ( 100 * 18 ) + ( 100 * 15 ) + ( 100 * 13 ) + ( 100 * 10 )
} else if ( 400 >= electricityUnit && 301 >= electricityUnit ) {
    unit = electricityUnit
    remaningUnit = unit - 300
    electiryBill = remaningUnit * 18 + ( 100 * 15 ) + ( 100 * 13 ) + ( 100 * 10 )
} else if ( 300 >= electricityUnit && 201 >= electricityUnit ) {
    unit = electricityUnit
    remaningUnit = unit - 200
    electiryBill = remaningUnit * 15  + ( 100 * 13 ) + ( 100 * 10 )
} else if ( 200 >= electricityUnit && 101 >= electricityUnit ) {
    unit = electricityUnit
    remaningUnit = unit - 100
    electiryBill = remaningUnit *  13  + ( 100 * 10 )
} else if ( 100 >= electricityUnit ) {
    unit = electricityUnit
    remaningUnit = unit - 100
    electiryBill = remaningUnit *  10 
} else {
    console.log(`WRONG INPUT`)
}

console.log(`Your Bill of unit is : ${unit} and your bill is : ${electiryBill} `)





