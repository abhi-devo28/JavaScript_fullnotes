// ---- Immediatly Invoked Function Expression (IIFE)

 //named IIFE

(function chai() {
    console.log(`DB connected`)
})();
// global scope pollution removal


 //unnamed IIFE wtih parameter

((name) => {
    console.log(`abhishek ${name}`)
    
}) (`abhishek`)