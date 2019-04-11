const add = 1;
const subtract = 2;
const multiply = 3;
const divide = 4;

let first = Math.floor((Math.random() * 10) + 1);
let second = Math.floor((Math.random() * 10) + 1);
let operator = Math.floor((Math.random() * 4) + 1);
let result;

if (operator == add) {
  result = first + second;
  console.log(first + ' + ' + second + ' = ' + result)
} else if (operator == subtract) {
  result = first - second;
  console.log(first + ' - ' + second + ' = ' + result)
} else if (operator == multiply) {
  result = first * second;
  console.log(first + ' * ' + second + ' = ' + result)
} else if (operator == divide) {
  result = first / second;
  console.log(first + ' / ' + second + ' = ' + result)
} else {
  console.log('Not sure what to do');
}
