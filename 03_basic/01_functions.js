function syMyName() {
    console.log("lakhan");
}

// syMyName() //("syMyName" is refernce and "()" => excute)

function add_three_nums(param1,param2,param3) { //param1 & param2 => parameter
    console.log(param1 + param2 + param3);
}

// add_three_nums(3,4,5)


function add_two_nums(param1,param2) {
   let result= param1 + param2
    return result // before return initalize or declare anything 
}

const result = add_two_nums(3 , 4)
// console.log("Result",result);

function myStatus(username) {
    return `${username} just logged in instagram`
}

// console.log(myStatus("lakhan"));


// ----
// cheking if condition

function myStatus1(username) {
    if(!username){ //!=> not (!username => username === undefined) 
        console.log("please enter a name");
        return
    }

    return `${username} just logged in instagram`
}

// console.log(myStatus1());
// console.log(myStatus1("lakhan"));

// ----
// direct added


function myStatus2(username = "User") { //when user not be delclare any username then atomatically add a user name on their name and user will defined thier name overwrite their to user
    if(!username){ //!=> not (!username => username === undefined) 
        console.log("please enter a name");
        return
    }

    return `${username} just logged in instagram`
}

console.log(myStatus2()); 
// console.log(myStatus2("laxman"));

function myShoopingGoods(...Goods) { // ... => rest operator use multiple parameter acesess
    return Goods
}

// console.log(myShoopingGoods(200,400,600,800,1000,1500));


function myShoopingGoods1(value1,value2, ...Goods) { // ... => rest operator use multiple parameter acesess
    return Goods 
}

console.log(myShoopingGoods1(200,400,800,5120,6450)); // 200,400 is on value1,value2 and rest are print 200,400 not print beacuse value1 & value2 is not return

const user = {
    name: "laxman",
    age : 23,
    email : "shindelaxman@google.com"
}

function myobj(myobj1){
    console.log(`my name is ${myobj1.name} and my age is ${myobj1.age} and email is ${myobj1.email}`); //acess object to function
}

// myobj(user)

// myobj({
//     name : "lakhan",
//     age : 52,
//     email : "laxmanshinde@gmail.com"
// }) //added this type object also

