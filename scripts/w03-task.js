/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    let difference = number1 - number2;
    return difference;
}

/* Arrow Function - Multiply Numbers */
const mulitply =(number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    if (number2 !== 0) {
        let quotient = number1 / number2;
        return quotient;
    } else {
        return "Cannot divide by zero";
    }
}

/* Decision Structure */
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2= Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value= subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/*Event Listener for Multiplication */
const multiply = (number1, number2) => number1 * number2;

document.querySelector('#multiplyNumbers').addEventListener('click',() => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);     
});

/*Event Listener for Division */
document.querySelector('#divideNumbers').addEventListener('click',() => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);

});

/*Event Listener for Get Total Due*/
document.querySelector('#getTotal').addEventListener('click', () => {
    let subtotal= parseFloat(document.querySelector('#subtotal').value);
    let isMember = document.querySelector('#member').checked;

    if (isMember) {
        subtotal *=0.8; //Apply 20% discount for members
    }

    let total = subtotal.toFixed(2);
    document.querySelector('#total').textContent = `$ ${total}`;
});



/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];



/* Output Source Array */
document.querySelector('#array').textContent = numbersArray;


/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number %2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);