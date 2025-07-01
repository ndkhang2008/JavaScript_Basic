// For

// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

// function getTotal(arr) {
// var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// var myArray = [
//     1,
//     2,
//     3,
//     4
// ]

// var array = getTotal(myArray)
// console.log(array)

// For in 

// function run(object) {
//     const result = [];
//     for (const key in object) {
//         result.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     return result;
// }

// console.log(run({ name: 'Nguyen Van A', age: 16 }));

// while

// var i = 0
// while (i < 1000) {
//   i++;
//   console.log(i)
// }

// do/while

// do{
//   i++;
//   console.log(i)
// } while (i < 1000);

// break

// for (var i = 0; i < 1000; i++) {
//   console.log(i);

//   if (i >= 5) {
//     break;
//   };

// }

// continue

// for (var i = 0; i < 1000; i++) {
//   if (i%2 !== 0) {
//     continue;
//   };
//   console.log(i)

// }

// vòng lặp lòng nhau

// var myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]

// for(var i = 0; i < myArray.length; i++) {
//   for(var key in myArray[i]) {
//     console.log(myArray[i][key])
//   }
// }

// array ko trùng lặp

// var array = [1, 2, 3, 1, 2, 3 ]

// console.log([...(new Set(array))])

// function đệ quy

// function countDown(num) {
//   if (num > 0 ) {
//     console.log(num)
//     return countDown(num - 1)
//   }
// }
// countDown(10)

function loop(start, end, cb) {
  if (start <= end) {
    cb(start);
    return loop(start + 1, end, cb)
  }
}
var arr = ['JavaScript', 'PHP', 'Ruby']
loop(0, arr.length - 1, function(index) {
  console.log('index:', index)
})