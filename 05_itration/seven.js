
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (nums) => nums + 7)

// console.log(newNums);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (nums) => {
    return nums + 7
} )

console.log(newNums);

const myarr = [1,2,3,4,5,6,7,8,9,10]

const newarr = myarr
                    .map( (nums) => nums * 4 )
                    .map( (nums) => nums + 2 )
                    .map( (nums) => nums + 52)
                    .filter( (nums) => nums >= 60 )

// console.log(newarr);

// -----------------
