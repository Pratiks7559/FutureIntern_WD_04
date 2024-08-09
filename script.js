let result = document.getElementById('result');
let keys = document.querySelectorAll('.key');

let calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: null,
    operator: null,

    updateDisplay() {
        result.value = this.displayValue;
    },

    handleKeyClick(event) {
        let key = event.target;
        let keyValue = key.textContent;

        if (keyValue === 'C') {
            this.displayValue = '0';
            this.firstOperand = null;
            this.secondOperand = null;
            this.operator = null;
        } else if (keyValue === '←') {
            this.displayValue = this.displayValue.slice(0, -1);
        } else if (keyValue === '=') {
            this.calculate();
        } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
            this.operator = keyValue;
            this.firstOperand = parseFloat(this.displayValue);
            this.displayValue = '0';
        } else {
            if (this.displayValue === '0') {
                this.displayValue = keyValue;
            } else {
                this.displayValue += keyValue;
            }
        }

        this.updateDisplay();
    },

    calculate() {
        this.secondOperand = parseFloat(this.displayValue);

        switch (this.operator) {
            case '+':
                this.displayValue = (this.firstOperand + this.secondOperand).toString();
                break;
            case '-':
                this.displayValue = (this.firstOperand - this.secondOperand).toString();
                break;
            case '*':
                this.displayValue = (this.firstOperand * this.secondOperand).toString();
                break;
            case '/':
                if (this.secondOperand !== 0) {
                    this.displayValue = (this.firstOperand / this.secondOperand).toString();
                } else {
                    this.displayValue = 'Error';
                }
                break;
            default:
                this.displayValue = 'Error';
        }

        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;

        this.updateDisplay();
    }
};

keys.forEach(key => {
    key.addEventListener('click', calculator.handleKeyClick.bind(calculator));
});