function getDivisors(num) {
    var divisorsArr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            divisorsArr.push(i);
    }
    return divisorsArr;
}
console.log(getDivisors(10));