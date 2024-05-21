
user = {
    username : "lakhan",
    price : 9766,

    welcomeMsg : function(){
        console.log(` Hii ${this.username},  Welcome to our website`);
    }
}

// user.welcomeMsg()
// user.username = "laxman"
// user.welcomeMsg()




// function myBio(){
    // let username = "lakhan"
//     console.log(this.username);
// }



// const myBio = function(){
//    let username = "lakhan"
//     console.log(this.username);
// }

// console.log(myBio());


// const myBio = () => {
//     let username = "lakhan"
//      console.log(this.username);
//  }
 

// myBio()

// -------------

const mystatus1 = (num1,num2) => {
    return num1 + num2
} 
// console.log(mystatus1(3,4)); 


const mystatus2 = (num3,num4) => num3 + num4
// console.log(mystatus2(6,7));


const mystatus3 = (num5,num6) => (num5 + num6)
// console.log(mystatus3(6,2));


const myStatu = (num8,num9) => ({username: "laxman"})
console.log(myStatu(3,4));