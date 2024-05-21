let buy = document.querySelectorAll(".buy")
let add = document.querySelectorAll(".add")
let price = document.querySelectorAll(".card__price")
let cards__card = document.querySelectorAll(".cards__card card")
// let final_result = document.querySelector(".final_result")
const final_result = []
let result = []


 



buy.forEach( (e)=> {
    e.addEventListener('click',(code)=>{
        // console.log(code);
        // console.log(typeof e);

        if(code.target.id === "chilii"){
            const chil = document.querySelector(".final_result")
            // console.log(chil);
            result.push(chil.innerHTML = 398)
        }

        if(code.target.id === "Brush"){
            const Brush = document.querySelector(".final_result")
            result.push(Brush.innerHTML = 751)
            // result.innerHTML = 751
        }

        if(code.target.id === "Oil"){
            const Oil = document.querySelector(".final_result")
            result.push(Oil.innerHTML = 250)
            // final_result.innerHTML = 250
        }

        if(code.target.id === "Soap"){
            const Soap = document.querySelector(".final_result")
            result.push(Soap.innerHTML = 65)
            // final_result.innerHTML = 65
        }

        if(code.target.id === "Facewash"){
            const Facewash = document.querySelector(".final_result")
            result.push(Facewash.innerHTML = 752)
            // final_result.innerHTML = 752
        }

        if(code.target.id === "Salt"){
            const Salt = document.querySelector(".final_result")
            result.push(Salt.innerHTML = 20)
            // final_result.innerHTML = 20
        }

        if(code.target.id === "Shampoo"){
            const Shampoo = document.querySelector(".final_result")
            result.push(Shampoo.innerHTML = 1085)
            // final_result.innerHTML = 1085
        }

        if(code.target.id === "Shoes"){
            const Shoes = document.querySelector(".final_result")
            result.push(Shoes.innerHTML = 5176)
            // final_result.innerHTML = 5176
        }

        if(code.target.id === "Laptop"){
            const Laptop = document.querySelector(".final_result")
            result.push(Laptop.innerHTML = 27999)
            // final_result.innerHTML = 27999
        }

        if(code.target.id === "Sugar"){
            const Sugar = document.querySelector(".final_result")
            result.push(Sugar.innerHTML = 1835)
            // final_result.innerHTML = 1835
        }

        if(code.target.id === "Bottel"){
            const Bottel = document.querySelector(".final_result")
            result.push(Bottel.innerHTML = 55)
            // final_result.innerHTML = 55
        }

        if(code.target.id === "Headphone"){
            const Headphone = document.querySelector(".final_result")
            result.push(Headphone.innerHTML = 1670)
            // final_result.innerHTML = 1670     
            
        }
        
        
    const sum = result.map((num, index) => {
    return num + (index + 1);
    }).reduce((acc, current) => acc + current, 0);
    console.log(sum);



        const result3 = document.querySelector('#buysome')
        result3.innerHTML = sum

        sum.innerHTML = `<span>${sum}</span>`
    
        // final_result.innerHTML = `<span>${final_result}}</span>`


    })
})



// add.forEach( (e)=> {
//     e.addEventListener('click',(code)=>{
//         // console.log(code);
//         // console.log(typeof e);

//         if(code.target.id === "chilii"){
//             const chil = document.querySelector(".final_result")
//             // console.log(chil);
//             result.push(chil.innerHTML = 398)
//         }

//         if(code.target.id === "Brush"){
//             const Brush = document.querySelector(".final_result")
//             result.push(Brush.innerHTML = 751)
//             // result.innerHTML = 751
//         }

//         if(code.target.id === "Oil"){
//             const Oil = document.querySelector(".final_result")
//             result.push(Oil.innerHTML = 250)
//             // final_result.innerHTML = 250
//         }

//         if(code.target.id === "Soap"){
//             const Soap = document.querySelector(".final_result")
//             result.push(Soap.innerHTML = 65)
//             // final_result.innerHTML = 65
//         }

//         if(code.target.id === "Facewash"){
//             const Facewash = document.querySelector(".final_result")
//             result.push(Facewash.innerHTML = 752)
//             // final_result.innerHTML = 752
//         }

//         if(code.target.id === "Salt"){
//             const Salt = document.querySelector(".final_result")
//             result.push(Salt.innerHTML = 20)
//             // final_result.innerHTML = 20
//         }

//         if(code.target.id === "Shampoo"){
//             const Shampoo = document.querySelector(".final_result")
//             result.push(Shampoo.innerHTML = 1085)
//             // final_result.innerHTML = 1085
//         }

//         if(code.target.id === "Shoes"){
//             const Shoes = document.querySelector(".final_result")
//             result.push(Shoes.innerHTML = 5176)
//             // final_result.innerHTML = 5176
//         }

//         if(code.target.id === "Laptop"){
//             const Laptop = document.querySelector(".final_result")
//             result.push(Laptop.innerHTML = 27999)
//             // final_result.innerHTML = 27999
//         }

//         if(code.target.id === "Sugar"){
//             const Sugar = document.querySelector(".final_result")
//             result.push(Sugar.innerHTML = 1835)
//             // final_result.innerHTML = 1835
//         }

//         if(code.target.id === "Bottel"){
//             const Bottel = document.querySelector(".final_result")
//             result.push(Bottel.innerHTML = 55)
//             // final_result.innerHTML = 55
//         }

//         if(code.target.id === "Headphone"){
//             const Headphone = document.querySelector(".final_result")
//             result.push(Headphone.innerHTML = 1670)
//             // final_result.innerHTML = 1670     
            
//         }
        
        
//     const sum = result.map((num, index) => {
//     return num + (index + 1);
//     }).reduce((acc, current) => acc + current, 0);
//     // console.log(sum);



//         const result3 = document.querySelector('#addcart')
//         result3.innerHTML = sum

//          sum.innerHTML = `<span>${sum.toLocaleString('en-Am')}</span>`
    
//         // final_result.innerHTML = `<span>${final_result}}</span>`


//     })
// })

