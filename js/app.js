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


function generatePin() {
    const generateInput = document.getElementById('display-pin');
    generateInput.value = getPin();
}