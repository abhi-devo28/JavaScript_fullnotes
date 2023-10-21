const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(myNumbers.map((num) => num + 10))

// chaining 

const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums)



// reduce method in js 

const num = [1, 2, 3]

const myTotal = num.reduce(function (acc, curval) {
    console.log(`acc : ${acc} and curval : ${curval}`)
    return acc + curval
}, 0)



const myTotal2 = num.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal2)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {

        itemName: "java course",
        price: 5999
    },
    {

        itemName: "data scientist course",
        price: 10999
    },
    {

        itemName: "mobile dev course",
        price: 20999
    }
]

 console.log(shoppingCart.reduce (( acc , item) => acc + item.price,0 ))