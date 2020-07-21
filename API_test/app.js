// Create a request variable and assign a new XMLHttpRequest object to it.
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    var data = JSON.parse(this.responseText);
    data.forEach(obj => {
        console.log(obj.title);
    });
}

request.send()