// for in 

const myObj = {
    js : "javascript",
    py : "python",
    rb : "ruby"
}

for (const key in myObj) {
    console.log(`${key} shortcuts of ${myObj[key]}`);
}

//-----------------------------------
// For in loop not itratable of map 
// const map =  new Map()
// map.set('ls', "laxman shinde")
// map.set('LP', "lakhan patil")

// for (const key in map) {
//    console.log(key);
// }

