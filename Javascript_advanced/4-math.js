function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber/firstNumber;
    };
};

function addBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber + firstNumber;
    };
};

function addBy100() {
    return addBy(100);
};

function addBy1000() {
    return addBy(1000);
};

function divideBy10() {
    return divideBy(10);
};

function divideBy100() {
    return divideBy(100);
};