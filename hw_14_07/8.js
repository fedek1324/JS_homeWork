var arr = [5,5,1,4];
var res = -1;
for (let i = 1; i < arr.length; i++) {
    var sum = 0;
    for (let j = 0; j < i; j++) {
        sum += arr[j];
    }
    if (sum > 10) {
        res = i;
        break;
    }
}
console.log(res);