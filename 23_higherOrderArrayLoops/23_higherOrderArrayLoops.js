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


const map = new Map()     // map enter only unique value and in order as entered
map.set ("Punjab", "pun")
map.set ("Himachal", "hp")

console.log(map)

for (const [key, value] of map){   // arrray destructure
    console.log(key , ":-" , value)
}


/*const myObject = {
    'game1' : ' nfs'
    'game2' : 'spiderman'
}

for ( const */        // this will not work


const myObject = {
    js : ' javascript ',
    cpp : 'c++',
    py : ' python'
    
}

// for in loop (objects)

for (const key in myObject ){
    console.log( ` ${key} shortcut is for ${myObject[key]}`)
}

// for in loop (arrays)

const programming = [ "js", "cpp" , "py"]

for (const key in programming){
    console.log(programming[key])
}



// for each loop most used for arrays

const coding = ["js", "ruby", "java", "python"]

coding.forEach((item, index, arr) => {    // callback function has no name
    console.log(item, index, arr)
});


/*function printme (item){    // this is also the  method
    console.log(item)
}
coding.forEach(printme)*/


const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "ja"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageName)
})

