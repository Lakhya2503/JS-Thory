
// let a = 25;
// const b = 10;
// var c = 79;

// console.log(a);
// console.log(b);
// console.log(c);


if (!false) {
    let a = "let variable"
    const b = "const variable"
    var c = "var variable"
}

// console.log(a);
// console.log(b);
// console.log(c); //this is run beacuse it's a var variable and this variable ignore a scope that whay nothing anybody use var variable



// -- 
// closer
// child function will be acess the parent function but parent function not acess the child function

function one() {
    const username = "laxman"

    function two() {
        let myName = "lakhan"
        // console.log(username);
    }

    // console.log(myName); //error beacuse this is not acces to function two() beacuse your in parent function 

    two()
}

one()

if (true) {
    let fname = "lakhan"
    if (fname === "lakhan") {
        let channel = "coding "
        // console.log(`${channel} with ${fname}`);
    }
    // console.log(channel);
}

// console.log(fname);


// -------


console.log(status1(5))
function  status1(value){
    return value + 1
}

// -----
// expression 

// status2(5) //can't acces this type this hold on variable not a direct function
const status2 = function(value2) {
    return value2 + 1
}

// ------------------------



