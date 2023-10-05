 // Arrays part 2 

 const marvel_heroes = ["spiderman", "thor", ]
 const dc_heroes = [ "superman" , "batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)

const allheroes = marvel_heroes.concat(dc_heroes)  // properly merge
console.log(allheroes)

// below is the most preffered way to merge the arrays  --- spread operator

const new_heroes = [...marvel_heroes , ...dc_heroes]
console.log("this is the result" , new_heroes)

const an_arr = [1, 2, 3, [ 4, 5] , 6, 7 , [ 7, 6,[4,5] ]]
const real_an_arr = an_arr.flat(Infinity)
console.log(real_an_arr)

console.log(Array.isArray( "abhishek"))
console.log(Array.from( "abhishek"))
console.log(Array.from({
    name: "abhishek"
} )) // interesting


let score1 = 100 
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3))