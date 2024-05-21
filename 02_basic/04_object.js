const user = new Object() //return as empty object
// user = {} //return as empty object
// console.log(user);

user.name = "laxman" 
user.age = 22
user.email = "shindelaxman@google.com"

// console.log(user);

const data = {
    user_01_id : {
            first_name : "laxman",
            last_name : "shinde",
            age : 23,
            email : "shindelaxman@microsoft.com",
            password : 8577722685
        },
    user_02 : {
            first_name : "jitendra",
            last_name : "patil",
            age : 22,
            email : "laxmanpatil@google.com",
            my_bag : {
                product_01 : "pancack",
                product_02 : "water_battle",
                product_03 : "iceream",
                product_04 :"tea"
            },
    }  
    }

// console.log(data.user_02.my_bag.product_02);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = Object.assign({},obj1, obj2) // "{}" optional but it is a good practis and this is target
const obj3  = {...obj1,...obj2} //dont use "{}" this braces in this

// console.log(obj3);

const mysub = [
    {
        a : "alpha",
        b : "beta"
    },
    {
        a : "alpha",
        b : "beta"
    },
    {
        a : "alpha",
        b : "beta"
    },
    {
        a : "alpha",
        b : "beta"
    }
]

// console.log(mysub[1].a); // that type intialize beacuse this is a under of array

// console.log(Object.keys(data.user_01_id)); //key's access
// console.log(Object.values(data.user_01_id)); // key's under data also access
// console.log(Object.entries(data.user_01_id)); // entries access

// console.log(data.hasOwnProperty('user_02')); // question and answer will be boolean type

// ------------
// object distructure

const course = {
    subject : "JS in hindi",
    instructor: "laxman shinde",
    course_link: "https://www.google.com/search?client=firefox-b-d&q=google+link", //not to try this is google link
}

const {subject} = course
// const {subject : sub} = course //short name also use


console.log(subject);
// console.log(sub);

// {
//     "my_name" : "laxman shinde",
//     "my_age" : 32,
//     "my_compy" : "Lubricant_wood"
// }
