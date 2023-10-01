//  1.in this we convert into a number
let score = null
console.log (typeof score)
let valueInNumber = Number(score)  //convesion method
console.log( valueInNumber)
/*33 => 33
"33ab" => NaN ( not a number)  
true => 1 ;  false => 0
null => 0
undefined => NaN */

// 2.conversion into string
let parameter = 45
let valueInString = String(parameter)  //conversion method
console.log( typeof valueInString)

// 3. conversion into boolean

let sigma = 0
let valueInBoolean = Boolean(sigma)
console.log(valueInBoolean)
 // in 0 we get only false and any natural no. we get true  



 /*---------- operations -----------*/

 console.log(2+2)  // add the two numbers
 console.log(2-2)  // subltraction
 console.log(2/2)  // division
 console.log(2*2)  // multiply
 console.log(2**5)  //raise to power
 console.log(2%2)   // remainder


/*Now we learn some concepts*/

console.log("1"+2)
console.log( 1 + 1 + "2")
console.log(1 + "1" + 2 )


//now we see some prefix and suffix in js ( increment or decrement)
//firstly solve it on copy then see the output

let num1 = 2 
console.log( num1++)
console.log( num1--)
console.log( ++num1)
console.log( --num1)
console.log( num1)
