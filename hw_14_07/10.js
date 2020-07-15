var arr = [ [1,2,3], [4,5], [6]];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    var innerArr = arr[i];
    for (let j = 0; j < innerArr.length; j++) {
        sum += innerArr[j];
    }
}
console.log(sum);