
const words = ["Frontend Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const textElement = document.querySelector(".type-text");
    if (!textElement) return;

    const currentWord = words[wordIndex];
    if (isDeleting) { charIndex--; } else { charIndex++; }

    textElement.textContent = currentWord.substring(0, charIndex);

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}


const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const taskList = document.getElementById("taskList");

if (addBtn && todoInput) {
    addBtn.onclick = function() {
        const val = todoInput.value;
        if (val.trim() !== "") {
            const li = document.createElement("li");
            li.innerHTML = "<span>" + val + "</span>" + 
                           "<button onclick='this.parentElement.remove()' style='background:#ef4444; color:white; border:none; padding:5px; border-radius:4px; cursor:pointer;'>Delete</button>";
            li.style.cssText = "display:flex; justify-content:space-between; align-items:center; background:#334155; padding:10px; margin-top:10px; border-radius:5px; color:white; list-style:none;";
            taskList.appendChild(li);
            todoInput.value = "";
        }
    };
    todoInput.addEventListener("keypress", (e) => { if (e.key === "Enter") addBtn.click(); });
}


function appendToDisplay(input) {
    const display = document.getElementById('display');
    if (display) display.value += input;
}

function clearDisplay() {
    const display = document.getElementById('display');
    if (display) display.value = "";
}

function calculate() {
    const display = document.getElementById('display');
    if (display) {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = "Error";
        }
    }
}


function updateClock() {
    const clock = document.getElementById('clock');
    if (!clock) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = h + ":" + m + ":" + s;
}
setInterval(updateClock, 1000);


const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.onclick = () => document.body.classList.toggle('light-mode');
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    updateClock();

});
