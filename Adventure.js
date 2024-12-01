const prompt = require("prompt-sync")(); // Import the 'prompt-sync' module for user input in the terminal
const name = prompt("Please enter your name: "); // Prompt the user to enter their name
console.log("Welcome", name); // Greet the user with their name

// Function to start the game and ask if the user wants to play
function startPlay() {
    while (true) { // Create an infinite loop until valid input is received
        const shouldWePlay = prompt("Would you like to play Lewis' Life Lessons?"); // Ask the user if they want to play the game
        if (shouldWePlay.toLowerCase() === "yes") { // Check if the user says "yes"
            console.log("Great, please make your choice by typing either 'left' or 'right'"); // Inform the user of the game options
            theAdventure(); // Call the main adventure function
            break; // Exit the loop after starting the game
        } else if (shouldWePlay.toLowerCase() === "no") { // Check if the user says "no"
            console.log("That's a shame, see you again soon"); // Print a farewell message
            break; // Exit the loop
        } else { 
            console.log("Invalid input"); // Notify the user if their input is neither "yes" nor "no"
        }
    }
}

// Function to handle the adventure scenario
function theAdventure() {
    while (true) { // Create an infinite loop until a valid choice is made
        // Ask the user to choose a path and convert their input to lowercase
        const firstTurn = prompt("You are hiking Ben Nevis with some friends, and you come to a fork in the road.\nYour friends have chosen to turn right, what path do you choose? ").toLowerCase();
        if (firstTurn === "left") { // Check if the user chooses "left"
            console.log("Well you 'left' your troubles behind. You Win!"); // Print a winning message
            break; // Exit the loop
        } else if (firstTurn === "right") { // Check if the user chooses "right"
            console.log("Sorry, you and your friends 'right' off a cliff. You Lose :("); // Print a losing message
            break; // Exit the loop
        } else { 
            console.log("Invalid input"); // Notify the user if their input is invalid
        }
    }
}

startPlay(); // Start the game by calling the 'startPlay' function
