// Callback
function myFunction(param) {
    param(123)
}
function myCallback(value) {
    console.log('Value: ', value)
}
myFunction(myCallback)

// kiểm tra con gần nhất của array

var nameArray = [
    '1',
    '1',
    '1',
    '1',
]

for (var index in nameArray) {
   console.log(index,  nameArray.hasOwnProperty(index))
}