var couses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 250
    },

    {
        id: 2,
        name: 'HTML',
        coin: 0
    },

    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    
    {
        id: 4,
        name: 'PHP',
        coin: 400
    }
]

// forEach

// couses.forEach(function(couse, index) {
//     console.log(couse, index)
// })

// every

// var isFree = couses.every(function(couse, index) {
//     console.log(index)
//     return couse.coin === 0
// })
// console.log(isFree)

// some

// var isFree = couses.some(function(couse, index) {
//     console.log(index)
//     return couse.coin === 0
// })
// console.log(isFree)

// find

// var isFree = couses.find(function(couse, index) {
//     console.log(index)
//     return couse.name === 'PHP'
// })
// console.log(isFree)

// filter

// var isFree = couses.filter(function(couse, index) {
//     console.log(index)
//     return couse.coin === 0
// })
// console.log(isFree)

// map

// var newCouses = couses.map(function(couse) {
//     return {
//         id: couse.id,
//         name: `Khoá học ${couse.name}`,
//         coin: couse.coin,
//         coinText: `Giá: ${couse.coin}`
//     }
// })
// console.log(newCouses)

// reduce

// var i = 0
// function coinHandler(accumunlator, carrentValue, carrentIndex, originArray) {
//     i++;
//     var total = accumunlator + carrentValue.coin
//     console.log(i, accumunlator, carrentValue.coin, total)
//     return total;
  
// }
// var totalCoin = couses.reduce(coinHandler, 0) //value thứ là giá khởi tạo 
// console.log(totalCoin)

// includes
var myString = 'JavaScript Basic'
console.log(myString.includes('Basic', 2))