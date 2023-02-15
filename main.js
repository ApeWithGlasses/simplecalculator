const output = document.querySelector('.output');
let entryOne;
let entryTwo;
let operator;

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
    output.textContent = "";
    entryOne = 0;
    entryTwo = 0;
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