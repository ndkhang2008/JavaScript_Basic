var myObject = {
    name: 'Khang',
    age: 17,
    myKey: function() {
        return this.name
    }
}

myObject.address = 'Việt Nam'
delete myObject.age

console.log(myObject)
console.log(myObject.myKey())

// Object Constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar
}

var author = new User('khang', '17', 'avatar')
console.log(author)

// Đối tượng Date
function getNextYear() {
    var nextYear = new Date().getFullYear();
    return nextYear + 1
}

var nextYear = getNextYear() 

console.log(nextYear)

// Math

console.log(Math.PI)

var random = Math.floor(Math.random() * 100)

if(random < 5) {
    console.log('Chức Mừng!')
}