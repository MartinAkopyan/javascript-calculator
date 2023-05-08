let firstOperand;
let operator;
let secondOperand;
let currentNum = '';
let result;
const nums = document.querySelectorAll('[data-num]');
let currentDisplay = document.querySelector('.calculator__display-current');
let lastDisplay = document.querySelector('.calculator__display-last');
const operators = document.querySelectorAll('[data-operator]');
const equal = document.querySelector('.btn-equal');

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
	if (operator === '+') {
		return add(firstNum, secondNum);
	}

	if (operator === '-') {
		return substract(firstNum, secondNum);
	}

	if (operator === '*') {
		return multiply(firstNum, secondNum)
	}

	if (operator === '/') {
		return divide(firstNum, secondNum)
	}
}

function updateCurrentValueDisplay(e) {
	if (currentNum.length < 12) {
		currentNum += e.currentTarget.dataset.num;
		currentDisplay.innerText = currentNum;
	}
}

function updateLastDisplayValue(e) {
	if (result) {
		lastDisplay.innerText = result + e.currentTarget.dataset.operator;
		operator = e.currentTarget.dataset.operator;
		firstOperand = Number(currentNum);
		lastDisplay.innerText = currentNum + e.currentTarget.dataset.operator;
		currentNum = '';
		currentDisplay.innerText = 0;
	}
	operator = e.currentTarget.dataset.operator;
	firstOperand = Number(currentNum);
	lastDisplay.innerText = currentNum + e.currentTarget.dataset.operator;
	currentNum = '';
	currentDisplay.innerText = 0;
}

nums.forEach(num => {
	num.addEventListener('click', updateCurrentValueDisplay)
})

operators.forEach(oper => {
	oper.addEventListener('click', updateLastDisplayValue)
})

equal.addEventListener('click', () => {
	secondOperand = Number(currentNum);
	result = operate(firstOperand, secondOperand, operator);
	currentDisplay.innerText = result;
	firstOperand = Number(result);
	lastDisplay.innerText += currentNum;
	currentNum = '';
})

