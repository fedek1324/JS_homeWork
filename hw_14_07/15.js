// 15
var arr = [1,2,3,4,5,6];
function print(arr, position = 0) {
    if(position >= arr.length)
        return;
    console.log(arr[position]);
    print(arr, ++position);
}
print(arr);