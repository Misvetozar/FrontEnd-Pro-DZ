let operandA;
do {
    operandA = prompt ('Введите первое число');
} while (operandA === null ||operandA === '' || isNaN(operandA));
  
let operandB;
do {
    operandB = prompt ('Введите второе число');
} while (operandB === null ||operandB === '' || isNaN(operandB));

let sign = prompt ('Введите оператор');

while (sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/')
{ 
    sign = prompt ('Введите оператор');
}

let result
switch (sign) {
    case '+':
        result = operandA + operandB;
        break;
    case '-':
        result = operandA - operandB;
        break;
    case '*':
        result = operandA * operandB;
        break;
    case '/':
        result = operandA / operandB;
        break;

  }

alert('Вот что вышло: ' + operandA + sign + operandB + ' = ' + result + '. Круто :)')
