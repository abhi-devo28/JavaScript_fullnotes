// if statement 
 
const isUserLoggedIn = true
const temperature = 41

if (temperature ===41){
        console.log("less than 50")
}
else{
    console.log("temperature is greater than 50")

}
 console.log( "execute")

 // < , > , <= > =,  == , != ,, === ( it also check the typeof) , !==

const score = 200
 if (score > 100 ){
            const power = "fly"
            console.log(` user power : ${power}`)
 }

 // console.log(` user power : ${power}`) => power of scope that it give us error
 
 
 // shorthand notation

const balance = 1000
 if (balance > 5 ) console.log("test");  // implicit scope


 // nesting


 if ( balance < 500 ) {
        console.log("less than")
 }
 else if (balance < 750){
    console.log("less than 750")
 }
 else {
    console.log("less than 1200")
 }



//  in real life if else statment 

const userLoggedI = true
const debitCard = true
const loggedInfromgoogle = false
const loggedInfromemail = true

if (userLoggedI && debitCard && loggedInfromemail||loggedInfromgoogle ){
    console.log ("allow to buy course you are eligible")
}


 //  Switch case statement

 /*switch (key) {
    case value:
        
        break;
 
    default:
        break;
 }*/

 const month = 3

 switch(month) {
    case 1 : 
    console.log("january")
    break;
    case 2 : 
    console.log("feb")
    break;
    case 3 : 
    console.log("march")
    break;
    case 4 : 
    console.log("april")
    break;

    default: 
    console.log( "NO month")
    break;

    // break : break the control flow after break whole case run automatically }






























