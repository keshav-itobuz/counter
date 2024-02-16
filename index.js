let output = document.getElementById("output");
function color_changer() {
    if (output.innerText < 0) {
        output.style.color = "red";
    }
    else if (output.innerText > 0) {
        output.style.color = "green";
    }
    else {
        output.style.color = "black";
    }
}

function add() {
    output.innerHTMl = output.innerText++;
    color_changer();
}

function reset() {
    output.innerHTML = 0;
    color_changer();
}

function subtract() {
    output.innerHTMl = output.innerText--;
    color_changer();
}

