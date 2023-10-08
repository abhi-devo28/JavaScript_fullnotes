// this refers to the current context

const user = {
    username : "abhisehek",
    price: 999,

    welcomemessage : function(){
        console.log(`${this.username } , welcome to website`);
        //console.log(this)

    }

}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
 
console.log(this)  // in node js it is empty object

// we cannot use this in a function we use it in object
// function chai() {
//     let username = "abhishek"
//     console.log(this.username)
// }

  

//------------------------------ARROW FUNCTION----------------

const chai = () => {
    let username = "abhishek"
    console.log(this)
}

chai()

// const addtwo = (num1, num2) => {
//     return num1 *num2
// }

  // implicit return
// const addtwo = (num1, num2) =>  num1 *num2
//const addtwo = (num1, num2) => ( num1 *num2)
const addtwo = () => ({username : "abhishek"})
console.log(addtwo())
    



 
