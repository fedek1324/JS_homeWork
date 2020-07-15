function arrayFill(char, count) {
    var arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(char);
    }
    return arr;
}
var arr = arrayFill('x', 5);
console.log(arr);