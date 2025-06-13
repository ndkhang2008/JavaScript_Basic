// toán tử số học
var a = 1
a++
var b = 2
b--

var c = a + b
var q = b % a

console.log(a)
console.log(b)
console.log(q)
console.log(c)
// toán tử gán

var w = a += b
console.log(w)

// Toán tử chuỗi
var firstName = 'Khang'
var lastName = 'Nguyen'

console.log(firstName + ' ' + lastName)

lastName += ' Dang '

console.log(lastName + firstName)

// Toán tử logical

if ( a == 3 && a + b == 4 ) {
    console.log('Conditions are correct!');
} else {
    console.log('Wrong conditions!')
}

if (!(a > 0)) {
    console.log('Conditions are correct!');
} else {
    console.log('Wrong conditions!')
}

// kiểu dữ liệu 

var myFunction = function() {
    alert('Hello')
}

myFunction();

var myObject = {
    name: 'Khang',
    age: 17
}
var myObject =[ 
     'Khang',
     17
]

console.log(typeof myObject)