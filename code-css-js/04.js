function showDialog() {
    alert('Hello')
}

// showDialog();

function writeLog(massage, massage2) {
    console.log(massage)
    console.log(massage2)
}

writeLog('hello', 'hello_2')


function writeLog_2() {
    console.log(arguments)
}
writeLog_2('hello', 'hello_2')


function writeLog_3() {
    myString = ''
    for(var name of arguments) {
        myString += `${name} -`
    }
    console.log(myString)
}
writeLog_3('log 1', 'log 1', 'log 1', 'log 1', 'log 1', 'log 1', 'log 1',)

// return

function cong(a, b) {
    return a + b
}

var result = cong(2, 3)
console.log(result)