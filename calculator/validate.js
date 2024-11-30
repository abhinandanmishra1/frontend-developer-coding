const isOperatorByKeyCode = (keyCode) => {
    const operatorKeys = [
        187, 189, 42, 43, 45, 47
    ]
    return operatorKeys.includes(keyCode);
}

export const isOperatorByValue = (value) => {
    const operatorKeys = [
        '+', '-', '*', '/', '%', '.'
    ];
    
    return operatorKeys.includes(value);
}

export function validateNumber(event) {
    const keyCode = event.keyCode;

    const operatorKeys = [
        187, 189, 42, 43, 45, 47
    ]

    const value = event.target.value;

    if(isOperatorByKeyCode(keyCode) && (value.length === 0 || operatorKeys.includes(value.charCodeAt(value.length - 1)))) {
        event.preventDefault();
    }
    const excludedKeys = [8, 37, 39, 46, 187, 189];

    if (!((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
}

export function validations () {
    const inputElement = document.getElementById('expression');
    inputElement.addEventListener('keydown', validateNumber);
}
