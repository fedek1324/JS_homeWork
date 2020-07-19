document.addEventListener("DOMContentLoaded", function (event) {

var input = document.querySelector('input[type="text"]');
var lists = document.querySelectorAll('li');

var tipsBtn = document.querySelector('.tipBtn');

var closeBtn = document.querySelector('.closebtn');

var overlay = document.getElementById('overlay');

tipsBtn.addEventListener('click', function() {
    overlay.style.height = '100%';
});

closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.style.height = '0';
});

function addNote() {
    var inputText = input.value;
    var todos = document.querySelector('.todos');
    todos.innerHTML += `<li><span><i class="fas fa-trash-alt"></i></span> ${inputText}</li>`;
    initDelFunctions();
    save();
}

function initDelFunctions() {
    var trashIcons = document.getElementsByClassName('fas fa-trash-alt');
    for (let i = 0; i < trashIcons.length; i++) {
        trashIcons[i].onclick = deleteNote(i);
    }
}

function clear() {
    var todos = document.querySelector('.todos');
    todos.innerHTML = "";
    save();
}

function deleteNote(number) {
    return function() {
        document.querySelectorAll('.todos li')[number].remove();
        initDelFunctions();
        save();
    };
}

function save() {
    localStorage.setItem(0, document.querySelector('.todos').innerHTML);
}

function load() {
    var todos = localStorage.getItem(0);
    document.querySelector('.todos').innerHTML = todos;
}

var saveBtn = document.querySelector('.save');
saveBtn.onclick = addNote;

var clearBtn = document.querySelector('.clear');
clearBtn.onclick = clear;
load();
initDelFunctions();
});