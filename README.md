# JavaScript Projects Collection

This repository is a collection of small JavaScript projects showcasing various concepts and features in JavaScript, combined with HTML and CSS for GUI-based and console-based applications.

## Table of Contents
1. [Introduction](#introduction)  
2. [Projects Overview](#projects-overview)  
3. [Requirements](#requirements)  
4. [How to Run](#how-to-run)  
5. [Project Details](#project-details)  
6. [Contributing](#contributing)  

## Introduction
This repository contains a collection of small JavaScript-based projects designed to be interactive, educational, and fun. Each project focuses on a specific concept or problem, with some being GUI-based and others running directly in the browser console.
These projects serve as an excellent way to learn JavaScript concepts while experimenting with frontend design using HTML and CSS.

## Projects Overview
Here are the JavaScript projects included in this collection:

- **CLI-Based Projects:**
  - `Adventure.js` – A simple text-based adventure game.  
  - `Calculate.js` – A calculator script executed in the console.  
  - `Kontacts.js` – A contact management CLI program.  
  - `TicTacToe.js` – A console-based Tic Tac Toe game.  

- **GUI-Based Projects:**
  - `GUI_ToDoList` – A dynamic to-do list application.  
  - `GUI_calc` – A calculator with a graphical interface.  
  - `GUI_colourCoder` – A color picker that displays HEX/RGB codes.  
  - `GUI_palChecker` – A palindrome checker with instant feedback.  
  - `GUI_passwordGen` – A password generator offering customizable options.  
  - `GUI_questions` – A quiz app with multiple-choice questions.  
  - `GUI_quoteGenerator` – Generates random inspirational quotes.  
  - `GUI_stopWatch` – A simple stopwatch with start, stop, and reset functionality.  
  - `GUI_weatherApp` – Displays weather information by fetching data from an external API.  
  - `GUI_hearts` – A fun app where hearts follow your cursor. 

More projects to come...

## Requirements
To run these projects, you’ll need:  
1. A web browser such as Chrome, Firefox, or Edge.  
2. A basic text editor like VS Code or Sublime Text to view or modify the code.

## How to Run

### For GUI-Based Projects:

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/Lew-E-G/JavaScript.git
2. **Navigate to the project folder:**
	```bash
   cd JavaScript
3. **Open the HTML file:**
    Navigate to the respective project folder and open the `.html` file in your browser.  
4. **Run the app:**
    The app will execute automatically in the browser.

### For GUI-Based Projects:

1. **Open your terminal.**
2. **Navigate to the folder where the file is stored.**
3. **Execute the file using Node.js:**
    ```bash
    node fileName.js

## Project Details

## CLI Projects

### 1. **CLI_Questions**
- **Description**: A terminal-based decision game where users are presented with an adventure scenario. They make choices (e.g., "left" or "right") that determine the outcome.
- **Concepts Used**:
  - Loops for input validation.
  - Functions for modular game logic.
  - Conditional statements to create branching storylines.
  - `prompt-sync` for handling user input in the CLI.

---

### 2. **Adventure.js**
- **Description**: A text-based adventure game where players navigate through choices to complete their journey successfully.
- **Concepts Used**:
  - String handling to format game prompts and choices.
  - Validation logic to ensure valid user input.
  - Use of loops and functions for structured game flow.
  - `prompt-sync` for capturing user input in real-time.

---

### 3. **Calculate.js**
- **Description**: A basic CLI calculator that takes two numbers and an arithmetic operator, performs the calculation, and displays the result.
- **Concepts Used**:
  - Mathematical operations using JavaScript's `eval` function.
  - Functions for reusable input validation logic.
  - Loops to handle invalid inputs (e.g., non-numeric entries).
  - Handling special cases like division by zero.
  - `prompt-sync` for user interaction.

---

### 4. **Kontacts.js**
- **Description**: A CLI-based contact management system where users can add, delete, search, and view contacts.
- **Concepts Used**:
  - Arrays to store multiple contact objects.
  - Objects to represent individual contact data (name, email, number).
  - Functions for modularity (e.g., adding, deleting, searching contacts).
  - Iterating through arrays and object properties.
  - `prompt-sync` for user interaction.

---

### 5. **TicTacToe.js**
- **Description**: A CLI implementation of the classic Tic-Tac-Toe game, played by two players on a 3x3 board.
- **Concepts Used**:
  - Multi-dimensional arrays to represent the board.
  - Nested loops for rendering and evaluating the game board.
  - Functions to modularize the game's logic (e.g., making a move, checking for a win).
  - Conditional checks for win conditions and tie scenarios.
  - Use of arrays to store winning line coordinates.


## GUI Project Details

Here are descriptions of the key GUI projects included in this collection:

### 1. **Palindrome Checker**
- **Description**: This app checks if a given input string is a palindrome, ignoring spaces and punctuation.
- **Concepts**:
  - String manipulation: Removing non-alphanumeric characters and reversing strings.
  - DOM manipulation: Dynamically retrieving input values and displaying results.
  - Event handling: Triggering checks on user actions.

---

### 2. **Quote Generator**
- **Description**: Displays a random inspirational quote each time a button is clicked. Ensures no quote is repeated until all have been shown.
- **Concepts**:
  - DOM manipulation: Updating the page with new quotes dynamically.
  - Animation: Uses a typewriter effect to enhance user experience.
  - Randomization: Ensures unique quote selection using `Math.random` and a `Set`.

---

### 3. **Stopwatch**
- **Description**: A simple stopwatch application that allows users to start, stop, and reset the timer.
- **Concepts**:
  - Time handling: Using `setInterval` to track and display elapsed time in "MM:SS" format.
  - DOM manipulation: Dynamically updating the timer display.
  - Event handling: Start, stop, and reset functions triggered by button clicks.

---

### 4. **Colour Coder**
- **Description**: A fun application that changes the background color of the webpage or a specific button to a random RGB value.
- **Concepts**:
  - Randomization: Generates random RGB color values.
  - DOM manipulation: Dynamically updates the background color of the webpage or specific elements.
  - Event handling: Changes color on button click.

---

### 5. **To-Do List App**
- **Description**: A fully interactive to-do list application that allows users to add, remove, and track items in their list.
- **Concepts**:
  - DOM manipulation: Dynamically rendering to-do items.
  - Local Storage: Persisting items between sessions.
  - Event handling: Add and remove operations triggered by user actions.

---

### 6. **Weather App**
- **Description**: Fetches and displays real-time weather data for a given city using the OpenWeatherMap API.
- **Concepts**:
  - API integration: Fetching weather data from an external API.
  - DOM manipulation: Dynamically updating the weather details on the page.
  - Error handling: Displays error messages for invalid city names.

---

### 7. **Password Generator**
- **Description**: Generates strong, random passwords of user-defined lengths. Allows users to copy the generated password to the clipboard.
- **Concepts**:
  - Randomization: Ensures inclusion of uppercase, lowercase, numbers, and symbols in generated passwords.
  - Clipboard API: Implements modern clipboard features for copying passwords.
  - DOM manipulation: Updates the UI with the generated password.

---

### 8. **Hearts Animation**
- **Description**: Displays animated heart shapes that follow the user's cursor as they move across the screen.
- **Concepts**:
  - Event handling: Tracks mouse movements in real-time.
  - DOM manipulation: Dynamically creates and removes heart elements.
  - CSS animations: Smoothly animates the appearance and fading of the hearts.

---

### 9. **Quiz App**
- **Description**: A multiple-choice quiz application that tests user knowledge with a series of questions.
- **Concepts**:
  - DOM manipulation: Dynamically displays questions and options.
  - State management: Tracks the user's progress and calculates the score.
  - Event handling: Handles question navigation and answer selection.

---

### 10. **Speech 2 Text**
- **Description**: A text to voice converter that allows users to input text and have it spoke back.
- **Concepts**:
  - DOM manipulation: User experience by altering UI elements in response to user actions and speech synthesis events.
  - Utilized the SpeechSynthesis API to convert text input into speech.
  - API Intergration: Utilized the SpeechSynthesis API to convert text input into speech.

## Contributing
If you'd like to contribute to this repository, feel free!

1. Fork the repository.
2. Make your changes.
3. Submit a pull request with a detailed description of your changes.