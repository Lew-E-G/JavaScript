const prompt = require("prompt-sync")({ sigint: true });

let result;
let valid = true;

function getNumber(stringNumber) {
  while (true) {
    // Use template literals to create the prompt message
    let numberInput = prompt(`Enter number ${stringNumber}: `);
    
    // Parse the input to an integer
    let number = parseInt(numberInput);
    
    // Check if the parsed input is a valid number
    if (isNaN(number)) {
      console.log("Invalid input, please enter a valid number.");
    } else {
      return number; // Return the number if it is valid
    }
  }
}

const number1 = getNumber('One');
console.log(`You entered: ${number1}`);
