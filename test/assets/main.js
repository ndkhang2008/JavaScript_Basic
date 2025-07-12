var couses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0
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
        coin: 0
    }
]
Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result === false) {
               return true
            }
        }
    }
    return false
}
var output = couses.some2((couse) => {
    return couse.coin == 0
})
console.log(output)
