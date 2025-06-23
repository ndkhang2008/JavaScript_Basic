function getRandomItem(arr) {
    if (arr.length === 0) return null; // Trường hợp mảng rỗng
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

var myArray = [
	'a',
	'b',
	'c'
]

var array = getRandomItem(myArray)
console.log(array)