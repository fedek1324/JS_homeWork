// 13
var str = "var_Text_Hello";
while (str.indexOf('_') != -1) {
    str = str.replace('_', '');
}
console.log(str);
