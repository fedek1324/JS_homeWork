// 16
var num = 98;
do {
    var sum = 0;
    var t = num;
    while (t != 0) {
        sum += t % 10;
        t = parseInt(t / 10);
    }
    num = sum;
} while (sum > 9);
console.log(num);