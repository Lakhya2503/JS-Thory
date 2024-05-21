

const narr = [1,2,3,4,5]

// const nearr = narr.reduce( function(acc,curval) {
//     console.log(`acc: ${acc}, curval: ${curval}`);
//     return acc + curval
// },0 )

// console.log(nearr);

// const nearr = narr.reduce( (acc,curval) => {
//     return acc + curval
// },0 )

// console.log(nearr);



const shopingCart = [
    {
        item : "Brush",
        Price : 50
    },
    {
        item : "Mobail",
        Price : 50555
    },
    {
        item : "shaving Cream",
        Price : 90
    },
    {
        item : "headphons",
        Price : 5000
    }
]

const Bill = shopingCart.reduce( (acc,item) => {
    return acc + item.Price
},0 )

console.log(Bill);
