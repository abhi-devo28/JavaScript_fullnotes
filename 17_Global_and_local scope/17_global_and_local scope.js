// ---------------- GLOBAL AND LOCAL SCOPE ---------

let a = 34

if (true) {
    let a = 45
    const b = 64
    console.log(`INNER: ${a}`)
    //var c = 23
}

console.log(a)
// console.log(a) 
// console.log(b)
// console.log(c)   // so var is not used in the entire coding of the java script it does not obey scope


// ------------------  NESTED SCOPE -----------------
  //child can acess the  parent code 

function one() {
    const username = "abhishek"

    function two() {
        const website = "youtube "
        console.log(username)
    }
    //console.log(website)

    two()
}

one()


//------------------------------------------------

if (true) {
    const username = "abhishek"
    if ( username ==="abhishek") {
            const website = "youtube"
            console.log(username + website)
    }
    //   console.log(website)
}
 // console.log( username)


 //-----------------------------------------------------

  ///WAYS TO DECLARE THE Function

 console.log(addone(5))
 function addone(num){
    return num +1
 }


addtwo(5)
 const addtwo = function( num ){
    return num +2
 }
  // THERE IS AN ERROR