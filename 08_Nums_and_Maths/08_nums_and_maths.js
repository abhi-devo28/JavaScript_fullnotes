//++++++++++++++++++   NUMBERS   ++++++++++++++

const score = 123.45 
console.log(score)

const balance = new Number("1000000")
console.log(balance)

//  some properties of number 

console.log(balance.toString().length)
console.log(balance.toFixed(2))  // it is mostly used for ecommerce website
console.log(score.toPrecision(3))  
console.log(balance.toLocaleString("en-IN"))



// ++++++++++++++++++++  MATHS +++++++++++++
 
console.log(Math)
console.log(Math.abs(-4))  // convesion of negative value into positive
console.log(Math.round(4.6))
console.log(Math.ceil(3.5))
console.log(Math.floor(4.5))
console.log(Math.pow(3,4))

console.log(Math.floor(Math.random()*10)+1)

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max-min)+1)+min)