function run(a) {
    if(a % 15 === 0) {
        return 3
    } else if(a % 5 === 0) {
        return 2
    } else if(a % 3 === 0) {
        return 1
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

// switch

var date = 2 

switch(date) {
    case 2: //khi date = giá trị sau case thì chạy code
    case 3:
    case 4:
        console.log('hôm nay là thứ 2, 3, 4');
        break; //dừng điều kiện
    case 5:
        console.log('hôm nay là thứ 5');
        break;
    default: //đồng nghĩa với else
        console.log('không biết')
}

// toán tử 3 ngồi
var a = 1
var b = 2

var c = a > 1 ? a : b;
console.log(c)