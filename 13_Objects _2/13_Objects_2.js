//const tinderuser = new Object()  // singleton
const tinderuser2 = {}  // non singleton that is  literals
tinderuser2.id = 4566
tinderuser2.name = "abhishek"
tinderuser2.isLoggedin = false

console.log(tinderuser2)  // both are object

// objects in objects

const regularuser = {
    email: " abhishek@yahoo.com",
    fullname: {
        userfullname: {
            firstName: "abhishek",
            lastName: "thakur"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstName)

// merging the object

const  obj1 = { 1:"a" , 2:"b"}
const obj2  =  { 3:"c" , 4:"d"}

console.log( obj1, obj2 ) // this is not the method

console.log(Object.assign({} ,obj1, obj2)) // this is the good practise

const obj3 ={...obj1,...obj2}  // this is the latest method // we cannot do directy console.log
console.log(obj3)

// objects in arroys

const users = [ 
    {
        id : 1,
        email : "abhi@google.com",
    },
    {
        id : 1,
        email : "abhi@google.com",
    },
    {
        id : 1,
        email : "abhi@google.com",
    }
]
let u = (users[1].email)
console.log(u)

// important concept 

console.log (tinderuser2)
console.log(Object.keys(tinderuser2)) // main  // output is array form
console.log(Object.values(tinderuser2))  // main  // output is array form
console.log(Object.entries(tinderuser2))  // main  // output is array form
 console.log(tinderuser2.hasOwnProperty("isLoggedin")) // true