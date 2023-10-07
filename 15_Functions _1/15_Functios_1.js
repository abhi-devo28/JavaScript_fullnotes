function saymyName(){
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("E")
    console.log("K")
}

saymyName() // =>  reference then execution

// first method

function addtwonumbers(number1, number2)  {   //  when we make defination in paranthises called parameters
    console.log(number1 + number2)
}


//  second method

function addtwonumbers(number1, number2)  {   //  when we make defination in paranthises called parameters
    let result = number1 + number2
    return result
    console.log("abhishek")   // this cannot be executed because by defination after return another vallures not print
}

// third method

function addtwonumbers(number1, number2)  {   //  when we make defination in paranthises called parameters
    return number1+number2   // this cannot be executed because by defination after return another vallures not print
}

const result = addtwonumbers(4,3)  //  when we call the function (in paranthises is arguments)
console.log(`Result: ${result}`) // undefined  this is the problemm... 


function loginuserMessage(username= "sam"){
    if(username===undefined){                // another way to write !undefined
        console.log("please enter a usename")
        return
    }
    return ` ${username} just login in` 
}

console.log(loginuserMessage("abhishek"))  // when we not passed value "undefined"