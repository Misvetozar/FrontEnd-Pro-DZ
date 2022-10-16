const action = getAction();
const operandsCount = getOperandsCount ('Введите как много чисел должно быть');
const resultExpression = getExpression(operandsCount, action);
showResult(resultExpression);

// =====

function getAction() {
    let action = prompt('Выберите действие: + - / *');
    while (isActionInvalid(action)){
        action = prompt('Выберите действие: + - / *');
    }
    return action;
}

function isActionInvalid(action) {
    action !== '+' && action !== '-' && action !== '/' && action !== '*'
} 

function getOperandsCount(title){
    let operand = prompt(title);

while (isOperandsInvalid(operand))
{
    operand = prompt(title);
}


return +operand;
}

function isOperandsInvalid(num){
    return num === null || num.trim() === '' || isNaN(num) || num < 2;
}

function getNumber(title){

    let operand = prompt(title);


while (isNumberInvalid(operand))
{

    operand = prompt(title);
}

return +operand;
}


function isNumberInvalid(num){
    return num === null || num.trim() === '' || isNaN(num);
}


function getExpression(count, operation){
    let result = getNumber('Введите число 1');
    let expression = result;

    for(let i = 1; i < count; i++) {
        const operand = getNumber('Введите число ' + (i + 1));

    
    result = calculate(result, operand, operation);
    expression += operation + operand;
    }

    return `${expression} = ${result}`;  
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

function showResult(expression) {
    alert(expression);
}