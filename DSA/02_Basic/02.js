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
    electiryBill = remaningUnit * 20 
} else if ( 400 >= electricityUnit && 301 >= electricityUnit ) {
    unit = electricityUnit

} else if ( 300 >= electricityUnit && 201 >= electricityUnit ) {
    unit = electricityUnit
} else if ( 200 >= electricityUnit && 101 >= electricityUnit ) {
    unit = electricityUnit
} else if ( 100 >= electricityUnit ) {
    unit = electricityUnit
} else {
    console.log("WRONG INPUT")
}





