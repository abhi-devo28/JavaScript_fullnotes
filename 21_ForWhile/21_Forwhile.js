// for loop

for (let i = 0; i < 10; i++) {       // firstly varibale intialize and then condition check then printing work and before the ending curly brackets increment is done and agian check the condition
    const element = i;

    if (element == 5) {
        console.log("5 is the best number")
    }
    else {
        console.log("5 is not here")
    }
    console.log(element)
}

for (let i = 0; i < 2; i++) {
    console.log(`outerloop is : ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`innner loop is : ${j} and outerloop is ${i}`);
        console.log(i + "*" + j+"="  +i*j)
    }

}


let myArray = [ "flash", "batman"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}

// break 

for (let index = 1; index <=20 ; index++){
    if (index ==5){
        console.log('detected num5');
       break
    }
    console.log(`valueofiis ${index}`)
}

//continue

for (let index = 1; index <=20 ; index++){
    if (index ==5){
        console.log('detected num5');
    continue
    }
    console.log(`valueofiis ${index}`)
}