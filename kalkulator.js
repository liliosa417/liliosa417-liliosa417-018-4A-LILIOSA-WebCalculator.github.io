const calculator = {
	dysplayNumber: '0',
	operator:null,
	firstNumber:null,
	waitingForSecondNumber: false
};

function updateDysplay() {
	document.querySelector("dysplayNumber").innerText = calculator.dysplayNumber;
}

function clearCalculator() {
	calculator.dysplayNumber = '0';
	calculator.operator = null;
	calculator.firstNumber = null;
	calculator.waitingForSecondNumber = false;
}

function inverseNumber() {
	if (calculator.dysplayNumber === '0') {
		calculator.dysplayNumber = digit;
	} else {
		calculator.dysplayNumber += digit;
	}
}

function inverseNumber() {
	if (calculator.dysplayNumber === '0') {
		return;
	}
	calculator.dysplayNumber = calculator.dysplayNumber * -1;
}

function handleOperator(operator) {
	if (!calculator.waitingForSecondNumber) {
		calculator.operator = operator;
		calculator.waitingForSecondNumber = true;
		calculator.firstNumber = calculator.dysplayNumber;
		calculator.dysplayNumber = '0';
    } else {
    	alert('operator sudah ditetapkan')
    }
}

function performCalculator() {
	if (calculator.firstNumber == null || calculator.operator == null) {
		alert("anda belum menetapkan operator");
		return;
	}

	let result = 0;
	if (calculator.operator === "+") {
		result = parseInt(calculator.firstNumber) + parseInt(calculator.dysplayNumber);
	} else {
		result = parseInt(calculator.firstNumber) - parseInt(calculator.dysplayNumber)
	}

	calculator.dysplayNumber = result;
}


const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
	button.addEventListener('click', function (event) {

		// mendapatkan objek elemen yang diklik
		const target = event.target;

		if (target.classList.contains('clear')) {
			clearCalculator();
			updateDysplay();
			return;
		}

		if (target.classList.contains('negative')) {
			inverseNumber();
			updateDysplay();
			return;
		}

		if (target.classList.contains('equals')) {
			performCalculator();
			updateDysplay();
			return;
		}

		if (target.classList.contains('operator')) {
			handleOperator(target.innerText)
			return;
		}

		inputDigit(target.innerText);
		updateDysplay()
	});
}