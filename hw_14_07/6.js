var arr = [];
var interCount = 3;
for (let i = 0; i < interCount; i++) {
    var str = (i+1).toString().repeat(i+1);
    arr.push(str);
}
console.log(arr);