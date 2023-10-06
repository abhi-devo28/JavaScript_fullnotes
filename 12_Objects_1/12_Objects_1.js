// singleton   "when we declare it as constructor" 

// object literals
  
Object.create   // constructor method in which singleton is made

let sym1 = Symbol()

const Jsuser = {
    name: "abhishek",
    "full name" : "abhishek thakur",
   [sym1] : "mykey2",
    age : 18,
    email : "abhishek@google.com",
    isLoggedin : false,
    lastLoginDays: [ "monday", "tuesday"]
}

console.log(Jsuser.email)  //  old way to print the object 
console.log(Jsuser["full name"]) // this way we can use this type of value to print
console.log(Jsuser[sym1])

// changing the email

Jsuser.email = "tuhar@google.com"
//Object.freeze(Jsuser)  // this is way to freeze the object
Jsuser.email = "rajput@chatgpt.com"

console.log(Jsuser)


//   we can use funtions as variable 

Jsuser.greeting = function() {
    console.log(`hello js users, ${this.name}`);
}

 console.log(Jsuser.greeting())