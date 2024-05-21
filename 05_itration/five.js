// for Each 

const myArray = ["Js","cpp","py","java","rb"]

// myArray.forEach( function (val) {
//     console.log(val);
// } )


// myArray.forEach( (item) => {
//     console.log(item);
// })

function printme(val1) {
    console.log(val1);
}

// myArray.forEach(printme) //only reference can get don't declare a function

// -----------------

// myArray.forEach( (val, index, arr)=> { //full for of access on parameter
//     console.log(val,index,arr);
// } )

// -----------------

const myaryy1 = [
    {
        filename: "js",
        file : "javascript"
    },
    {
        filename: "py",
        file : "python"
    },{
        filename: "java",
        file : "java"
    },{
        filename: "rb",
        file : "ruby"
    },
]

myaryy1.forEach( (item) => {
    console.log(item);
} )

