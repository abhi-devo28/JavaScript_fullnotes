//  ------------ Two types of memory---------

//--Stack memory----(primitive data type memory)

// In stack memory copy of value is given from the memory

let accountName = "abhishek"
let anotherName = accountName
 anotherName = "tushar"
console.log(anotherName)

// ----- Heap memory ---- ( non primitive data type memory)

// in heap memory we cannot get copy we get reference from the memory that is orginal

let userOne={
    email: "abhishek@gmail.com",
    upi: 453435
}

let usertwo = userOne
usertwo.email = "tushar@google "
console.log(usertwo)