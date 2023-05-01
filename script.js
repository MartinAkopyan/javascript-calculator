function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(firstNum, secondNum, operator) {
	if(operator === '+') {
		return add(firstNum, secondNum);
	}

	if (operator === '-') {
		return substract(firstNum, secondNum);
	}

	if(operator === '*') {
		return multiply(firstNum, secondNum)
	}

	if (operator === '/') {
		return divide(firstNum, secondNum)
	}
}
let firstOperand = 15;
let operator = '-';
let secondOperand = 5;

console.log(operate(firstOperand, secondOperand, operator))

