//Array

let myarry = [0,1,2,3,4,5]
// console.log(myarry);
// outexp:  [0,1,2,3,4,5]

let superhero = ["Shaktiman", "Boogiman", "Ironman", "Spiderman", "Superman"]
// console.log(superhero);
// outexp: ['Shaktiman', 'Boogiman', 'Ironman', 'Spiderman', 'Superman']

let allArr = ["superhero", 254, "jasol", 8433]
// console.log(allArr);
// outexp: ["superhero", 254, "jasol", 8433]

// console.log(superhero.length);
//outexp: 5

superhero.unshift(2) // add first index some value
// console.log(superhero);
// outexp: [2,"Shaktiman", "Boogiman", "Ironman", "Spiderman", "Superman"]

superhero.shift() //first indx was remove
// console.log(superhero);
// outexp: ["Shaktiman", "Boogiman", "Ironman", "Spiderman", "Superman"]

superhero.push(3) //add some value on last indx
// console.log(superhero);
// outexp: ["Shaktiman", "Boogiman", "Ironman", "Spiderman", "Superman",3]

superhero.pop() //last indx was remove
// console.log(superhero);
// outexp: ["Shaktiman", "Boogiman", "Ironman", "Spiderman"]


const myarry2 = superhero.join()  //string convert
// console.log(superhero);
// console.log(myarry2); 
// outexp: Shaktiman, Boogiman, Ironman, Spiderman,Spiderman
// console.log(typeof myarry2); 
// outexp:String

// ---------
// slice
// splice

const myn1 = myarry.slice(1,3) //print the value but not include last index
// console.log("A",myarry);
// outexp: [0,1,2,3,4,5]
// console.log(myn1);
// outexp: [1,2]

const myn2 = myarry.splice(1,3) //cut the value
console.log("B",myarry);
// outexp: [0,4,5]
// console.log(myn2);
// outexp: [1,2,3]


