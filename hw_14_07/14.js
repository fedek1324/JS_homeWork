// 14
function inArray(word, arr) {
    return arr.includes(word);
}
console.log(inArray( "hello", ["hello", "bye"] ));
console.log(inArray( "helo", ["hello", "bye"] ));