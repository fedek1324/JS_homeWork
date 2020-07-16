// 9
var arr = [1,2,3,4,5,6,7];
for (let i = 0; i < parseInt(arr.length/2); i++) {
    var swatElIndex = arr.length - 1 - i;
    var tmp = arr[i];
    arr[i] = arr[swatElIndex];
    arr[swatElIndex] = tmp;
}
console.log(arr);