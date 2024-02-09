const form = document.querySelector("form");
let counter = 1;

form.onsubmit = function(e) {
    e.preventDefault();
    let taskValue = e.target.elements["task"].value;
    let task = `<li>
                    <input type="checkbox" class="task-${counter}" onchange="check(${counter})" >
                    <span>${taskValue}</span>
                </li>`;
    document.querySelector("ul").innerHTML += task;
    counter++;
}

function check(c) {
    let checkbox = document.querySelector(`.task-${c}`);
    let span = checkbox.nextElementSibling;

    if (checkbox.checked) {
        span.style.textDecoration = "line-through";
    } else {
        span.style.textDecoration = "none";
    }
}
