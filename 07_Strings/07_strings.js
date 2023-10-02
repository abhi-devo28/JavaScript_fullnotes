 // --------------strings-----------------

 const name = "abhishek"
 const repocount = 3
console.log(name)
 //console.log(name + repocount + "value")   // we don't use this type of syntax it is outdated

 // we use backticks

 console.log(`hello my name is ${name} and my repo count is ${repocount}`)

 const gameName = String(`abhishek`)
 console.log(gameName)

 //-----------properties------


 console.log(gameName.length)  
 console.log(gameName.toUpperCase())
 console.log(gameName.toLowerCase())
 console.log(gameName.charAt(2))  // character position
 console.log(gameName.indexOf("a"))  // character num
 console.log(gameName.substring(0 , 7))
 console.log(gameName.slice(-8,1))

// --------------------------------------------------------------------


const newstringOne = "    abhishek   "
console.log(newstringOne.trim()) // .trim used for removing white spaces

//-----------------------------------------------------------------------


const url = "https://abhishek.com/abhishek%20thakur"
console.log(url.replace('%20', '-')) // used for replacing
console.log(url.includes('abhishek'))  /// used for checking it is there or not


//----------------------------------------------------------------------

const carName = "My favourite car is Mercedes Benz"
console.log(carName.split(' '))  // split into arrays
