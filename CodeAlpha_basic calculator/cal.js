let display = document.getElementById("result");

function insert(value) {
    display.value += value;
    showResult();
}

function clearScreen() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function showResult() {
    try {
        let result = eval(display.value);
        if (result !== undefined) {
            display.value = display.value;
        }
    } catch {}
}
document.addEventListener("keydown", function(e) {
    if ((e.key >= '0' && e.key <= '9') || "+-*/".includes(e.key)) {
        insert(e.key);
    }
    if (e.key === "Enter") {
        calculate();
    }
    if (e.key === "Backspace") {
        clearScreen();
    }
});
