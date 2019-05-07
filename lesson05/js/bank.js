const quit = 'Q';
const withdraw = 'W';
const deposit = 'D';
const view_balance = 'B';

let currentBalance = 100;

function withdrawFromBalance() {
  try {
    let amountToSubtract = parseInt(prompt('Enter the amount to withdraw')) || 0;
    currentBalance -= amountToSubtract;
  } catch (error) {
    alert('Please enter a valid number!');
  }
}

function addToBalance() {
  try {
    let amountToDeposit = parseInt(prompt('Enter the amount to deposit')) || 0;
    currentBalance += amountToDeposit;
  } catch (error) {
    alert('Please enter a valid number!');
  }
}

function showCurrentBalance() {
  alert('Your current balance is: $' + currentBalance);
}

function handleInput(input) {
  switch(input) {
    case quit:
      return false;
    case withdraw:
      withdrawFromBalance();
      break;
    case deposit:
      addToBalance();
      break;
    case view_balance:
      showCurrentBalance();
      break;
    default:
      alert(input + ' is not a valid action!');
      break;
  }

  return true;
}

let shouldContinue = true;

do {
  let input = prompt("Enter an action:\n'W' to withdraw money\n'D' to deposit money\n'B' to view your current balance\n'Q' to quit", 'Q');
  shouldContinue = handleInput(input);
} while (shouldContinue);
