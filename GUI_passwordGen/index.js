// Selecting the input box where the password will be displayed
const passwordBox = document.getElementById("password");

// Setting the desired length of the password
const length = 12;

// Defining character pools for the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; // Lowercase letters
const number = "0123456789"; // Numbers
const symbol = "!-#$&/()=?+"; // Symbols

// Combining all character pools for random selection
const allChar = upperCase + lowerCase + number + symbol;

// Function to create a password
function createPassword(){
    let password = "";

    // Ensuring at least one character from each pool is included
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // Random uppercase letter
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // Random lowercase letter
    password += number[Math.floor(Math.random() * number.length)];       // Random number
    password += symbol[Math.floor(Math.random() * symbol.length)];       // Random symbol

    // Filling the rest of the password to meet the required length
    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]; // Random character from all pools
    }

    // Setting the generated password in the input box
    passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
    // Copy the password to clipboard
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            // Show the notification
            const notification = document.getElementById("copy-notification");
            notification.style.display = "block"; // Ensure it's visible
            notification.classList.add("show");

            // Hide the notification after 2 seconds
            setTimeout(() => {
                notification.classList.remove("show");
                notification.style.display = "none"; // Hide completely after fade-out
            }, 2000);
        })
        .catch(() => alert("Failed to copy password."));
}
