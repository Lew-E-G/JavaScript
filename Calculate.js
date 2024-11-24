// Basic CLI calculator demonstrating the use of functions, conditions, and loops

// Import the prompt-sync module to allow user input from the command line
const prompt = require("prompt-sync")();

let result; // Variable to store the calculation result
let valid = true; // Flag to indicate input validity (not currently used for validation but can be extended)

// Function to get a valid number input from the user
function getNumber(stringNumber) {
  while (true) { // Loop until the user provides a valid number
    let number = parseInt(prompt(`Enter number ${stringNumber}: `)); // Prompt user for input and parse it as an integer
    if (isNaN(number)) { // Check if the input is not a valid number
      console.log("Invalid input"); // Inform the user that their input is invalid
    } else {
      return number; // Return the valid number and exit the loop
    }
  }
}

// Function to perform arithmetic operations based on the provided operator
function arithmatic(operator, number1, number2) {
  // Check for division by zero, which is an invalid operation
  if (operator === "/" && number2 === 0) {
    console.log("Zero division error"); // Inform the user of the error
  } else {
    // Evaluate the arithmetic expression using the operator and numbers
    result = eval(number1 + operator + number2); 
    console.log(result); // Print the result to the console
  }
}

// Prompt the user for the first number
const number1 = getNumber('One');

// Prompt the user for the second number
const number2 = getNumber('Two');

// Prompt the user for an arithmetic operator
const operator = prompt("Enter a sign (+,-,/,*): ");

// Perform the arithmetic operation using the provided operator and numbers
arithmatic(operator, number1, number2);
