function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        if (result === Infinity || isNaN(result)) {
            throw new Error("Invalid input");
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error: ' + error.message;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        if (result === Infinity || isNaN(result)) {
            throw new Error("Invalid input");
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error: ' + error.message;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function sqrt() {
    const value = parseFloat(document.getElementById('display').value);
    if (value >= 0) {
        document.getElementById('display').value = Math.sqrt(value);
    } else {
        document.getElementById('display').value = 'Error: Invalid input';
    }
}

function sin() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sin(value);
}

function cos() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.cos(value);
}

function tan() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.tan(value);
}

function log() {
    const value = parseFloat(document.getElementById('display').value);
    if (value > 0) {
        document.getElementById('display').value = Math.log(value);
    } else {
        document.getElementById('display').value = 'Error: Invalid input';
    }
}

function pi() {
    document.getElementById('display').value += Math.PI;
}
