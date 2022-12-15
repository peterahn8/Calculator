function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function add(a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function sum(array) {
    return array.reduce((a, b) => a + b, 0);
}

function multiply(array) {
    return array.reduce((a,b) => a * b, 1);
}

function power(a, b) {
    return Math.pow(a, b);
}

function factorial(a) {
    let factArray = [a];

    if (a === 0) {
        return 1;
    };

    for (let i = 1; i < a; i++) {
        factArray.push(i);
    };

    return factArray.reduce((a, b) => a * b);
};