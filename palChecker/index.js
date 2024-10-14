const input = document.getElementById("input")
//find out how to remove space and punctuation 
function reverseString(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanedStr.split("").reverse().join("")
}

function check() {
    const value = input.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("This is a Palindrome")
    } else {
        alert("Unfortunately it isnt")
    }

    input.value = ""
}