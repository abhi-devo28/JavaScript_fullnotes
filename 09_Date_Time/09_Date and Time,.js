 // --------------------- DATE -------------------

 let myDate =  new Date(2023,0,23)

 console.log(myDate)
 console.log(myDate.toLocaleString())
 console.log(myDate.toString())
 console.log(myDate.toJSON())
 console.log(typeof myDate)

 let timeStamp = Date.now()

 //Method for comparing the date in milli second

 console.log(Math.floor((Date.now())/ 1000))
 console.log(myDate.getTime())

 console.log(new Date(2023,0,23).toLocaleString("default",{
    weekday: "short",
    
 }))