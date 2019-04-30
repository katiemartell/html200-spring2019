function square(number) {
    return number * number;
}

function processUserInput(callback) {
    let input = prompt('Please enter a number');
    return callback(input);
}

alert(processUserInput(square));
