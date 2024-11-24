// Demonstrates the use of multi-dimensional arrays and nested loops for a simple tic-tac-toe game
const prompt = require("prompt-sync")(); // Import prompt-sync for user input via terminal

// Function to handle the player's move
function makeMove(turn, board) {
    while (true) {
        // Prompt the player to input row and column
        const row = parseInt(prompt("Enter row: ")); // Input for the row
        const column = parseInt(prompt("Enter column: ")); // Input for the column

        // Validate the inputs: check if the row and column are numbers and within range
        if (isNaN(row) || row < 1 || row > 3) console.log("Invalid row"); // Invalid row input
        else if (isNaN(column) || column < 1 || column > 3) console.log("Invalid column"); // Invalid column input
        else if (board[row - 1][column - 1] !== " ") console.log("Invalid selection"); // Check if the cell is already occupied
        else {
            // If valid, update the board with the player's turn
            board[row - 1][column - 1] = turn;
            break; // Exit the loop after a valid move
        }
    }
}

// Function to print the current state of the board
function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        const row = board[i]; // Access each row
        let rowString = ""; // Initialize an empty string to build the row

        for (let j = 0; j < row.length; j++) {
            rowString += row[j]; // Add the cell's content to the string
            if (j !== row.length - 1) rowString += " | "; // Add separators between cells, except for the last cell
        }

        console.log(rowString); // Print the constructed row
        if (i !== board.length - 1) console.log("---------"); // Add a separator between rows, except for the last row
    }
}

// Function to check if a player has won
function checkWin(board, turn) {
    const lines = [
        // Define all possible winning combinations
        [[0,0],[0,1],[0,2]], // Row 1
        [[1,0],[1,1],[1,2]], // Row 2
        [[2,0],[2,1],[2,2]], // Row 3
        [[0,0],[1,0],[2,0]], // Column 1
        [[0,1],[1,1],[2,1]], // Column 2
        [[0,2],[1,2],[2,2]], // Column 3
        [[0,0],[1,1],[2,2]], // Diagonal from top-left to bottom-right
        [[0,2],[1,1],[2,0]], // Diagonal from top-right to bottom-left
    ];

    // Loop through each winning line
    for (let line of lines) {
        let win = true; // Assume the player has won until proven otherwise

        // Check each position in the line
        for (pos of line) {
            const [row, column] = pos; // Destructure the row and column
            if (board[row][column] !== turn) { // If any position is not the player's symbol, they haven't won
                win = false;
                break; // Exit the loop early
            }
        }
        if (win) return true; // Return true if the player has won
    }

    return false; // Return false if no winning line is found
}

// Initialize the board as a 3x3 grid of empty spaces
const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

let turn = "X"; // The starting player is X
let turnCount = 0; // Keep track of the number of turns taken
let win = false; // Flag to indicate if there is a winner

// Main game loop
while (turnCount < 9) { // The game ends after 9 turns if no winner is found
    console.log(turn, "player's turn"); // Announce the current player's turn
    makeMove(turn, board); // Call the function to handle the player's move
    printBoard(board); // Display the updated board
    console.log(); // Add a blank line for better readability

    win = checkWin(board, turn); // Check if the current player has won
    if (win) {
        console.log(turn, "has won!"); // Announce the winner
        break; // Exit the loop
    }

    // Switch turns between X and O
    if (turn === "X") turn = "O";
    else turn = "X";

    turnCount++; // Increment the turn counter
}

// If no winner was found after 9 turns, it's a tie
if (!win) {
    console.log("Tie game");
}
