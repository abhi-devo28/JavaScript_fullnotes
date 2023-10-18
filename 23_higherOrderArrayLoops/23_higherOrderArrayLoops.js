// array specific loop

// for of 

const arr = [ 1, 2 , 3 , 4 ]

for (const num of arr) {
    console.log (num);
}

const greetings = "hello world"

for (const greet of greetings){
    console.log(greet)
    
}

// maps 


const map = new Map()     // map enter only unique value 
map.set ("Punjab", "pun")
map.set ("Himachal", "hp")

console.log(map)

for (const [key, value] of map){   // arrray destructure
    console.log(key , ":-" , value)
}



