// comparison in java script
// we get boolean values that true or false

console.log(2<1)   //less than 1
console.log(2<=1)  // less than or equal to 1
console.log(2>1)   // greater than 1
console.log(2>=1)  // grearer than or equal to 1
console.log(2!=1)  // not equal to 1
console.log(2==1)  // later in concepts we use it 


/*8 compare it with null */   console.log("next comparison")
// we should avoid below type of condversion

console.log(null>0)  //false
console.log(null==0)  // false
console.log(null>=0)  // true because comparisons convert null to number 0 that's why in "first" attempt we get false and in "third "we get true

//=== strict comparison
/* in both case we get different result */ console.log("next comparison")

console.log("2"==2) //in this case it converts into a number
console.log("2"===2)