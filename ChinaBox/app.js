document.addEventListener("DOMContentLoaded", function (event) {
var ChinaBox = {
    price: 0,
    calories: 0,
    small: {
        price: 300,
        calories: 250
    },
    large: {
        price: 380,
        calories: 400
    },
    teriyakiAndPork: {
        price: 60,
        calories: 100
    },
    unagiAndBeef: {
        price: 80,
        calories: 150
    },
    oysterAndChicken: {
        price: 40,
        calories: 80
    },
    crackers: {
        price: 15,
        calories: 10
    },
    extraDip: {
        price: 20,
        calories: 5
    },

    calculate: function () {
        var size = document.querySelector('input[name="size"]:checked').value;
        this.price += ChinaBox[size].price;
        this.calories += ChinaBox[size].calories;
        
        var souceAndTopping = document.querySelector('input[name="souceAndTopping"]:checked').value;
        this.price += ChinaBox[souceAndTopping].price;
        this.calories += ChinaBox[souceAndTopping].calories;

        var checkBoxAll = document.querySelectorAll('input[name="extras"]:checked');
        checkBoxAll.forEach(checkBox => {
            var extra = checkBox.value;
            this.price += ChinaBox[extra].price;
            this.calories += ChinaBox[extra].calories;
        });

        this.printResult();
    },

    printResult: function() {
        document.getElementById("totalSum").innerHTML = this.price.toFixed(2);
        document.getElementById("totalCalories").innerHTML = this.calories.toFixed(0);
        this.resetAll();
    },

    resetAll: function() {
        this.price = 0;
        this.calories = 0;
    }
};

var form = document.querySelector("#myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    //document.getElementById("totalSum").innerHTML = "hello";
    // alert(document.querySelector('input[name="size"]:checked').value);
    // alert(document.querySelector('input[name="souceAndTopping"]:checked').value);
    // alert(document.querySelector('input[name="extras"]:checked').value);
    ChinaBox.calculate();
});

});