const maxNumber = getNumber ('Введите число');

const oddSum = getOddSum(maxNumber);

const evenSum = getEvenSum(maxNumber);

showResult(oddSum, evenSum);

// =========

function getNumber(title){
    let num = prompt(title);

while (isNumberInvalid(num))
{
    num = prompt(title);
}

return +num;
}


function isNumberInvalid(val){
    return val === null || val.trim() === '' || isNaN(val) || val<=0;
}

function getOddSum(maxNumber) {
    let i = 0;
    let result = 0;

    while ( i <= maxNumber) {
        if (i % 2 === 0) {
            result += i;
        }
        i++
    }
 return result;
}

function getEvenSum(maxNumber) {
    let i = 0;
    let result = 0;
    while ( i <= maxNumber) {
        if (i % 2 === 1) {
            result += i;
        }
        i++
    }
 return result;
}

function showResult(odd, even) {
    alert('Четные: ' + odd + ' Нечетные: ' + even + '. Круто :)')
}