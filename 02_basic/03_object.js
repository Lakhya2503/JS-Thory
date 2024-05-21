const mySym = Symbol("key1")

const myObj1 = {
    name : "laxman",
    "full Name" : "laxman shinde",
    age : 23,
    [mySym] : "key1",//this type declare a sysmbol in object
    city : "Nashik",
    email : "shindelaxman@google.com",
    isLoggedIn : false,
    dayOfLoggin : ["sunday", "Saturday"]
}


// console.log(myObj1.age); //this sysntax is run but not a right sytax 
// console.log(myObj1["name"]); //beacuse by default this initialization in convert on string

// console.log(myObj1["full Name"]); //that's whay use a string in object

// console.log(myObj1[mySym]);

// myObj1.city = "Amalner"

// Object.freeze(myObj1)
myObj1.city = "sinnar"
// console.log(myObj1);

myObj1.greeting = function() {
    console.log("Hello laxman how are you...?");
}

// console.log(myObj1.greeting);
// console.log(myObj1.greeting());


myObj1.greeting2 = function() {
    console.log(`He hi ${this.name} ... your age is ${this.age} ???? `); //when try "this." then you have multiple axcess on object's method
}

// console.log(myObj1.greeting());
// console.log(myObj1.greeting2());