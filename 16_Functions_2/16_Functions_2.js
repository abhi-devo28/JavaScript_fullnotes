// if we  not know how many arguments are going to in 

function calculatecartPrice ( val1, val2,...num1) {  //" ..." rest operator
    return num1

}
console.log(calculatecartPrice(200, 300, 400))

// ---------------- OBJECT --------------------

const user= {
    username : "abhishek",
    price :  199

}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)  // 1 method

handleobject({
    username : "abhishek",
    price : 12
})

//---------------- ARRAYS ----------------

const mynewarray = [ 200, 300, 400 , 500]

function returnsecvalue(value){
    return value[0]
}

console.log(returnsecvalue(mynewarray))
console.log(returnsecvalue([400, 400, 500]))
