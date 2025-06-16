var a = 1
var b = '1'
var c = 2

console.log(a === b)

if (a < c) {
    console.log('A < C')
} else {
    console.log('A > C')
}

var result = 'A' && 'B' && 'C' 
console.log(result) //ko có value false nó sẻ hiện value cuối
                    // đối với || thì sẻ lấy value true đầu tiên và luôn né false

var results = '' && 'B' && 'C'
console.log(results) //nếu có value false nó sẻ hiện