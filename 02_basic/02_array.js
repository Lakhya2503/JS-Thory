const CSK = ["Dhoni", "Devon", "Shivam"]
const MI = ["Rohit", "Suryakumar","Sanjay"]

// console.log(CSK);
// console.log(MI);

// CSK.push(MI) //two array merge but sepretate type
// console.log(CSK);

// const allPlayer = CSK.concat(MI) //Two array merge (limitation)
// console.log(allPlayer);

const myCrickefav = [...CSK,...MI] //same as concat but no limitation
// console.log(myCrickefav);


const nums = [2, 1, 7,[8, 9, 5], 4, 4, 6,[7, 4,[4, 1, 1]]]
const numse = nums.flat(Infinity)
// console.log(numse);

// const mystrinarr = (Array.of("string"))
// const mystrinarr = (Array.from("Strings"))
// const mystrinarr = (Array.isArray("Strings")) //question

// console.log(typeof mystrinarr);

const score1 = 100
const score2 = 200
const score3 = 300

const fullScore = Array.of(score1,score2,score3)
// console.log(fullScore);