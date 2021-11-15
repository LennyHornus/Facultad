function onClick() {
    if (inputsAreEmpty()) {
        label.textContent = 'Error: one or both inputs are empty.';
        return;
    }
    
    if (inputsAreNotANumber()) {
        label.textContent = 'Error: one or both inputs are not a number.';
        return;
    }

    updateLabel();
}

function inputsAreEmpty() {
    if (getNumber1() === '' || getNumber2() === '') {
      return true;
    } else {
      return false;
    }
}

function inputsAreNotANumber() {
    if (isNaN(parseInt(getNumber1())) || isNaN(parseInt(getNumber2()))) {
        return true
    } else {
        return false
    }
}

function updateLabel() {
    var addend1 = parseInt(getNumber1());
    var addend2 = parseInt(getNumber2());
    var sum = addend1 + addend2;
    if (!isNaN(addend1) && !isNaN(addend2)) {
        label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
    }
}

function getNumber1() {
    return inputs[0].value;
}

function getNumber2() {
    return inputs[1].value;
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);