
const code = ["js", "py", "rb", "java", "mongo", "cpp"]

const codingLang = code.forEach( (vals) => {
    console.log(vals);
} )

console.log(codingLang); //dosn't return anything

// --------
// filter 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (nums)=> { 
    return nums > 4 // condition  
} )

console.log(newNums); 

const book = [
    {
        BookName:"Human Societies", genrey: "History", publish: 1970, edition: 2019
    },
    {
        BookName:"Prisoners of Geography", genrey: "Geography", publish: 1950, edition: 2020
    },
    {
        BookName:"Gardens of the Moon", genrey: "Fantasy", publish: 1941, edition: 2013
    },
    {
        BookName:"The Alchemist", genrey: "Fiction", publish: 1978, edition: 1999
    },
    {
        BookName:"A Very Private School", genrey: "Biography", publish: 1892, edition: 1948
    },
    {
        BookName:"Paddle-to-the-Sea", genrey: "Geography ", publish: 1943, edition: 2015
    },
    {
        BookName:"Art of Relationship", genrey: "Fantasy", publish: 1910, edition: 2014
    }

]

// const myBook = book.filter( (books) => {
//     return books.genrey === "Fantasy"
// }  )


const myBook = book.filter( (books) => {
    return books.genrey === "Fantasy" && books.edition === 2014
}  )


console.log(myBook);