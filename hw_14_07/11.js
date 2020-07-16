// 11
var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    var innerArr = arr[i];
    for (let j = 0; j < innerArr.length; j++) {
        var doubleInnerArr = innerArr[j];
        for (let k = 0; k < doubleInnerArr.length; k++) {
            sum += doubleInnerArr[k];
        }
    }
}
console.log(sum);