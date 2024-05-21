//Immdiately Invoked Function Expressions (IIFE)

(function chai() {
    //named IIFE
    console.log(`what is my name`);
})();

((name)=> {
    //unnamed IIFE
        console.log(`your name is ${name}`);
    })('laxman')