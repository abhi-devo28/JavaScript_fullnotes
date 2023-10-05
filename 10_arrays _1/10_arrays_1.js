// ----------------arrays--------------

//  {} => this is braces/ curly braces ,  [] => this is brackets , () => this is paranthesis

// we write arrays in brackets

const myArr = [ 0, 1, 2, 3, 4,5]  // in brackets written is called elements element should be different string , numbers etc.
const myHeroes =  [ "shaktiman" ,"nagraj"]
const myArr2 = new Array( 1, 2, 3 , 4)   // this is another way to declare array

console.log( myArr[1])  // this is way to indices arrays
console.log(myArr2)

// ---- Methods-------

myArr.push(6)
myArr.pop()  // removing the last value

myArr.unshift(9)
myArr.shift()


console.log(myArr.includes(9))
console.log(myArr.indexOf(9)) // values is -1 if it does not exist

const myNewarr = myArr.join()
console.log(typeof myArr)   // object
console.log(typeof myNewarr) // string


// slice and splice
// difference is which array is manipulate original array or not
console.log( "A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log( "B", myArr)

const myn2 = myArr.splice(1,3)
console.log( "c", myArr)
console.log(myn2)
