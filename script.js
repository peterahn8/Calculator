let currentOperation,
    storedVal,
    currentVal;
let displayedVal = document.querySelector("#display");
let operators = document.getElementsByClassName("operator");

const input = document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        populate(btn.innerHTML);
        currentVal = parseInt(displayedVal.innerHTML);
    });
});

const selectOperator = document.querySelectorAll(".operator").forEach(btn => {
    btn.addEventListener("click", () => {
        storedVal = parseInt(displayedVal.innerHTML)
        currentVal = 0;
        displayedVal.innerHTML = "0";

        currentOperation = btn.id;
        let fn = window[currentOperation];
        if (typeof fn === "function") {
            currentOperation = fn;
        }
    });
});

const equal = document.querySelector("#equal").addEventListener("click", () => {
    if (typeof storedVal === "undefined") {
        displayedVal.innerHTML = "0";
    } else {
        displayedVal.innerHTML = operate(currentOperation, currentVal, storedVal);
        storedVal = parseInt(displayedVal.innerHTML);
    }
});

const clear = document.querySelector("#clear").addEventListener("click", () => {
    displayedVal.innerHTML = "0";
    currentVal = 0;
    storedVal = 0;
});

const del = document.querySelector("#del").addEventListener("click", () => {
    if (displayedVal.innerHTML.length === 1) {
        displayedVal.innerHTML = "0";
    } else {
        displayedVal.innerHTML = displayedVal.innerHTML.slice(0,-1);
    }
    currentVal = parseInt(displayedVal.innerHTML);
});

function populate(val) {
    if (displayedVal.innerHTML === "0") {displayedVal.innerHTML = "";}
    displayedVal.innerHTML += val;
}

function operate(operator, a, b) {while (operator) {return operator(a, b)};}

function add(a, b) {return a + b;}

function subtract (a, b) {return b - a;}

function multiply(a, b) {return a * b;}

function power(a, b) {return Math.pow(b, a);}

function factorial(a) {
    let factArray = [a];
    if (a === 0) {
        return 1;
    };
    for (let i = 1; i < a; i++) {
        factArray.push(i);
    };
    return factArray.reduce((a, b) => a * b);
}
