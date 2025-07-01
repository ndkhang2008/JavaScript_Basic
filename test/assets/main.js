for (var i = 0; i < 100; i++) {
    if(i%5 !== 0) {
        continue;
    };
    console.log(i);
    if(i >= 50) {
        break;
    }
}