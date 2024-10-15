const input = document.getElementById("input")
// Grabs the input element with the id "input" from the DOM

// Function to reverse the string and clean it by removing spaces and punctuation
function reverseString(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Split the cleaned string into an array, reverse the array, and join it back into a string
    return cleanedStr.split("").reverse().join("");
}

// Function to check if the input value is a palindrome
function check() {
    // Get the input value, remove non-alphanumeric characters, and convert to lowercase
    const value = input.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the cleaned input value
    const reverse = reverseString(value);
    
    // Compare the cleaned input value with its reversed version
    if (value === reverse) {
        // If they match, it is a palindrome
        alert("This is a Palindrome");
    } else {
        // If they don't match, it is not a palindrome
        alert("Unfortunately it isnt");
    }

    // Clear the input field after the check
    input.value = "";
}
