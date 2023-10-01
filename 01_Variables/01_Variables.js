 const accountName = " abhishek" // const should be a unique  
 let accountNumber = 45436       // we cannot use let accountNumber second time in the code (except we use only accountNumber"but don't use it like this")
 var accountCity = "talwara"     // we cannot use var in the latest javascipt code 
 accountPassword = 4544          // we can use this type also but don't prefer to use it
 let accountEmail;               // in this case we get undefined 

 console.table([ accountCity, accountName, accountNumber, accountPassword, accountEmail])


 // examples for why to use or not  ( anyone can uncomment it and see the possible errors)

 //const accountName = "tushar"  // we get error while use it again
 //let accountNumber = 45667     // we again get error in this code (accountNumber already been taken in let)
 /*var accountCity =" talwara"  
 console.log( accountCity)*/     // prefer not use var because of issue in functional and block scope