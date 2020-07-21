var input = document.querySelector('input[type="text"]');
var ul = document.querySelector('ul');
var tipsBtn = document.querySelector('.tipBtn');
var closeBtn = document.querySelector('.closebtn');
var clearBtn = document.querySelector('.clear');

var overlay = document.getElementById('overlay');

ul.addEventListener("click", function(e) {
    console.log(e);
    var target = e.target;
    if(target.tagName == 'LI') {
        target.classList.toggle('checked');
        normalizeSequence();
        save();
    }
});

function normalizeSequence() {
    var firstChecked = document.querySelector('ul li.checked');
    var secondChecked = document.querySelectorAll('ul li.checked')[1];
    if (secondChecked) {
        secondChecked.before(firstChecked);
    }
    else {
        ul.append(firstChecked);
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