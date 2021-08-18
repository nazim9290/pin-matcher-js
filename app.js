function getPin() {
    let pin = Math.round(Math.random() * 10000)
    let pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin()
    }

}
document.getElementById('generate').addEventListener('click', function () {
    const pin = getPin()
    let showfild = document.getElementById('show');
    showfild.value = pin;
})


document.getElementById('keyPad').addEventListener('click', function (even) {
    const number = even.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previusNUmber = calcInput.value;
        const newNumber = previusNUmber + number;
        calcInput.value = newNumber;
    }
})


function verifyPin() {
    const pin = document.getElementById('show').value;
    const typeNUmber = document.getElementById('type-numbers').value;
    const succsessMassage = document.getElementById('notify-success');
    const failMassage = document.getElementById('notify-fail');

    if (pin == typeNUmber) {

        succsessMassage.style.display = 'block'
        failMassage.style.display = 'none'
    } else {
        succsessMassage.style.display = 'none'
        failMassage.style.display = 'block'
    }
}