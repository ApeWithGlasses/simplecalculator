const output = document.querySelector('.output');
const buttonElement = document.querySelectorAll('.button');
let entryOne;
let entryTwo;
let operator;
let counter = 0;

output.style.fontSize = '70px';
const text = output.textContent;
const numCharacters = text.length = 8;

const nine = () => {
    output.textContent = output.textContent + 9;
}

const eight = () => {
    output.textContent = output.textContent + 8;
}

const seven = () => {
    output.textContent = output.textContent + 7;
}

const six = () => {
    output.textContent = output.textContent + 6;
}

const five = () => {
    output.textContent = output.textContent + 5;
}

const four = () => {
    output.textContent = output.textContent + 4;
}

const three = () => {
    output.textContent = output.textContent + 3;
}

const two = () => {
    output.textContent = output.textContent + 2;
}

const one = () => {
    output.textContent = output.textContent + 1;
}

const zero = () => {
    output.textContent = output.textContent + 0;
}

const clean = () => {
    output.textContent = "";
    counter = 0;
}

const plus = () => {
    entryOne = parseFloat(output.textContent);
    operator = "+";
    clean();
}

const rest = () => {
    entryOne = parseFloat(output.textContent);
    operator = "-";
    clean();
}

const multiply = () => {
    entryOne = parseFloat(output.textContent);
    operator = "*";
    clean();
}

const frac = () => {
    entryOne = parseFloat(output.textContent);
    operator = "/";
    clean();
}

const reset = () => {
    output.style.fontSize = '70px';
    output.textContent = "";
    entryOne = 0;
    entryTwo = 0;
    counter = 0;
    operator = "";
}

const equal = () => {
    entryTwo = parseFloat(output.textContent);
    result();
}

const result = () => {
    let result = 0;
    switch (operator) {
        case "+":
            result = entryOne + entryTwo;
            break;
        case "-":
            result = entryOne - entryTwo;
            break;
        case "*":
            result = entryOne * entryTwo;
            break;
        case "/":
            result = entryOne / entryTwo;
            break;
    }

    output.textContent = result;
}

const sizeControl = () => {
    if (counter >= 8) {
        output.style.fontSize = '50px';
    }
    
    if (counter >= 12) {
        output.style.fontSize = '30px';
    }

    if (counter >= 20) {
        output.style.fontSize = '20px';
    }

    if (counter == 31) {
        alert('Detente ahí noob, son demasiados caracteres, ¿puedes de una vez por todas operar?');
    }
}

const clickCounter = () => {
    counter++;
    console.log(counter);
    sizeControl();
}