let quizQuestions = [];
let currentQuestion = 0;
let score = 0;

// Fetch questions from the JSON file
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        quizQuestions = data.questions;  // Store the questions
        displayQuestion();               // Display the first question
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });

// Function to display a question and its options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const question = quizQuestions[currentQuestion];
    
    // Update question text
    questionElement.textContent = question.question;
    
    // Clear out previous choices
    choicesElement.innerHTML = "";
    
    // Display choices as buttons
    question.options.forEach((option, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = option;
        choiceButton.className = "choice";
        choiceButton.onclick = () => checkAnswer(option); // Pass the option to checkAnswer
        choicesElement.appendChild(choiceButton);
    });
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer) {
    const question = quizQuestions[currentQuestion];
    
    // Check if the selected answer matches the correct answer
    if (selectedAnswer === question.answer) {
        score++;
    } else {
    }

    // Move to the next question
    currentQuestion++;
    
    // Check if the quiz is over
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();  // Display next question
    } else {
        endQuiz();  // End quiz if no more questions
    }
}

// Function to end the quiz
function endQuiz() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    
    // Display final score and hide the choices
    questionElement.textContent = `Quiz complete! Your score: ${score}/${quizQuestions.length}`;
    choicesElement.innerHTML = "";
    document.getElementById("submit").style.display = "none"; // Hide the submit button
}