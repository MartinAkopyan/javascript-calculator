let firstOperand = 15;
let operator = '*';
let secondOperand = 5;
let currentNum = '';
const nums = document.querySelectorAll('[data-num]')
let currentDisplay = document.querySelector('.calculator__display-current')

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
		console.log(currentNum);
		currentDisplay.innerText = currentNum;
	}
}

nums.forEach(num => {
	num.addEventListener('click', updateCurrentValueDisplay)
})


