var input = document.querySelector('input[type="text"]');
var ul = document.querySelector('ul');
var tipsBtn = document.querySelector('.tipBtn');
var closeBtn = document.querySelector('.closebtn');
var clearBtn = document.querySelector('.clear');

var overlay = document.getElementById('overlay');
var jokeText = document.querySelector('.jokeText'); 

var jokeBtn = document.querySelector('.jokeBtn');
jokeBtn.addEventListener('click', function() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.jokes.one/jod', true)
    
    request.onload = function () {
        var data = JSON.parse(this.responseText);
        console.log(data.contents.jokes[0].joke.text);
        jokeText.innerHTML = data.contents.jokes[0].joke.text;
    }
    
    request.send()
});

ul.addEventListener("click", function(e) {
    console.log(e);
    var target = e.target;
    if(target.tagName == 'LI') {
        target.classList.toggle('checked');
        moveToCorrectPosition(target);
        save();
    }
});

function moveToCorrectPosition(li) {
    var firstChecked = document.querySelector('ul li.checked');
    var secondChecked = document.querySelectorAll('ul li.checked')[1];
    console.log('hi' );
    if (li.classList.contains('checked')) {
        if (secondChecked) {
            secondChecked.before(li); //move li before secondChecked
        }
        else {
            ul.append(li); // move to the end
        }
    }
    else {
        if(firstChecked)
            firstChecked.before(li);
    }
}

function initDeleteFunctions() {
    var spans = document.querySelectorAll('span');
    var is = document.querySelectorAll('i');
    for(let span of spans) {
        if (span.parentElement.tagName == 'LI')
            span.addEventListener('click', () => {
                console.log('u clicked span');
                span.parentElement.remove();
                save();
            });
    }
    for(let i of is) {
        if (i.parentElement.parentElement.tagName == 'LI')
            i.addEventListener('click', () => {
                i.parentElement.parentElement.remove();
                save();
            });
    }
}

function save() {
    localStorage.setItem("todos", document.querySelector('.todos').innerHTML);
}

function load() {
    if (localStorage.getItem("todos"))
        ul.innerHTML = localStorage.getItem("todos");
}

input.addEventListener("keypress", function(key) {
    if(key.which == 13 && this.value) {
        var li = document.createElement('li');
        var span = document.createElement('span');
        var icon = document.createElement('i');

        var newTodo = this.value;
        this.value = "";

        icon.classList.add('fas', 'fa-trash-alt');
        span.appendChild(icon);
        li.append(span,newTodo);
        ul.prepend(li);
        initDeleteFunctions();
        save();
    }
});

clearBtn.addEventListener('click', function() {
    ul.innerHTML = "";
    save();
});

tipsBtn.addEventListener('click', function() {
    overlay.style.height = '100%';
});

closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.style.height = '0';
});
load();
initDeleteFunctions();