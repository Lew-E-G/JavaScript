// Get the display input element from the DOM
const display = document.getElementById("display");

// Function to append user input (numbers/operators) to the display
function appendToDisplay(input) {
    display.value += input; // Add the input value to the current display value
}

// Function to clear the display
function clearDisplay() {
    display.value = ""; // Reset the display to an empty string
}

// Function to evaluate and calculate the expression in the display
function calculate() {
    try {
        // Use the eval() function to evaluate the mathematical expression in the display
        display.value = eval(display.value);
    } catch (error) {
        // If an error occurs (e.g., invalid expression), show "Error" in the display
        display.value = "Error";
    }
}
