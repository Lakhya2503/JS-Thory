// currency Denomination

// 500, 200, 100, 50, 20, 10, 5, 2, 1

let amount = 1875;
let fiveHundredNotes = 0;
let twoHundredNotes = 0;
let hundredNotes = 0;
let fiftyRupeesNotes = 0;
let twentyRupeesNotes = 0;
let tenRupeesNotes = 0;
let fiveRupeesCoins = 0;
let twoRupeesCoins = 0; 
let oneRupeesCoins = 0;

if( amount >= 500 ) {
   console.log(`₹500 Notes : ${Math.floor(amount/500)} 💸`)
   amount = amount%500
} 
if (amount >= 200) {
    console.log(`₹200 Notes : ${Math.floor(amount/200)} 💸`)
    amount = amount%200
}
if (amount >= 100) {
   console.log(`₹100 Notes : ${Math.floor(amount/100)} 💸`)
    amount = amount%100
}
if (amount >= 50) {
    console.log(`₹5 Notes : ${Math.floor(amount/50)} 💸`)
    amount = amount%50
}
if (amount >= 20) {
    console.log(`₹20 Notes : ${Math.floor(amount/20)} 💸`)
    amount = amount%20
}
if (amount >= 10) {
    console.log(`₹10 Notes : ${Math.floor(amount/10)} 💸`)
    amount = amount%10
}
if (amount >= 5) {
    console.log(`₹5 Coin : ${Math.floor(amount/5)} 💸`)
    amount = amount%5
}
if (amount >= 2) {
    console.log(`₹2 Coin : ${Math.floor(amount/2)} 💸`)
    amount = amount%2
}
if (amount >= 1) {
    console.log(`₹1 Coin : ${Math.floor(amount/1)} 💸`)
    amount = amount%1
}
