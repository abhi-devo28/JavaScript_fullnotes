// primitive data types 

//  =>   strings , number , boolean , null , undefined , symbol , BigInt

let value = 45
let name = "abhishek"
let isloggedin = true
let outsidetemp = null 
let bigNum = 45893866343434n
let email;
let Id = Symbol("123")
let anotherId = Symbol("123")

console.log(value)
console.log(name)
console.log(isloggedin)
console.log(outsidetemp)
console.log(bigNum)
console.log(email)
console.log(Id )
console.log(anotherId )

// NOW WE ARE GOING TO COMPARE BOTH ID AND ANOTHER ID 

console.log(Id === anotherId)  // false 


// non primitive data types ( non reference)
    
//    arrays , objects , functions 


console.log( typeof email)  // typeof is use to determine the data types 
console.log( typeof value)   
console.log( typeof isloggedin)   
console.log( typeof outsidetemp)   // null is object data type exception
console.log( typeof bigNum)   
console.log( typeof Id)   
console.log( typeof anotherId)  