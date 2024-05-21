// for of 

// ["", "", "", ""]
// [{}, {}, {}, {}]

const subject = ["math", "english", "history", "marathi", "hindi"]
for (const sub of subject) { //object means not a data type of object, object is a type of declaration
    // console.log(sub);
}


// const myName = "laxman shinde"
// for (const name of myName) {
//     console.log(`characters of My Name: ${name}`);
// }

//---------------


//Map

const map = new Map()
map.set('LS', "Laxman Shinde")
map.set('LP', "Lakhan Patil")

console.log(map);


for (const key of map) {
    console.log(key);
}


for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

//---------------

// Not itrateble means no run the code
// myObj = {
//     game1 : "Pubg",
//     game2 : "FreeFire",
//     game3 : "WorldWar2"
// }
 
// for (const [key,value] of myObj) {
//     console.log(key,value); 
// }
