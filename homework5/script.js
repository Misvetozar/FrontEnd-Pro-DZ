const operation = getOperation();
const operands = getOperands();
const result = calculateResult(operands, operation);
showResult(result);

function getOperation() {
    let action = prompt('Выберите действие: + - / *');

    while (isOperationInvalid(action)){
        action = prompt('Выберите действие: + - / *');
    }

    return action;
}

function isOperationInvalid(action) {
    action !== '+' && action !== '-' && action !== '/' && action !== '*';
} 

function getOperands () {
    let answer = prompt('Введите числа:');

    while(isOperandsAnswerInvalid(answer)){
        answer = prompt('Введите числа:');
    }

    const operandsStrs = answer.split(',');
    const operands = [];

    for(let i = 0; i < operandsStrs.length; i++) {
        operands[i] = +operandsStrs[i];
    }

    return operands;
}

function isOperandsAnswerInvalid(val){
    return val === null || val.trim() === '';
}

function calculateResult(values, operator) {
    let result = values[0];

    for (let i = 1; i < values.length; i++) {
        result = calculate(result, values[i], operator);
    }
    return result;
}

function calculate(a, b, action) {
    switch (action) {
        case '+' :
            return a + b;
        case '-' :
            return a - b;
        case '*' :
            return a * b;
        case '/' :
            return a / b;
    }
}

function showResult(value) {
    alert('Результат: ' + value);
}