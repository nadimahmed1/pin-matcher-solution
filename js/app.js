function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        return getPin();
    }
}

// 
function generatePin() {
    const generateInput = document.getElementById('display-pin');
    generateInput.value = getPin();
}
// 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})
//
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('calc-input').value;
    const success = document.getElementById('success');
    const error = document.getElementById('error');
    if (typed == pin) {
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
        success.style.display = 'none';
    }
}