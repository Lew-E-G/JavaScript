// Select the first <body> element in the document
const body = document.getElementsByTagName("body")[0];

// Select the fifth <button> element in the document (index 4, since indexes are 0-based)
const randomButton = document.getElementsByTagName("button")[4];

// Function to set the background color of the body
function setColour(name) {
    // Update the body's background color to the provided color name or value
    body.style.backgroundColor = name;
}

// Function to generate and apply a random RGB color
function randomColour() {
    // Generate a random integer between 0 and 255 for the red component
    const red = Math.round(Math.random() * 255);

    // Generate a random integer between 0 and 255 for the green component
    const green = Math.round(Math.random() * 255);

    // Generate a random integer between 0 and 255 for the blue component
    const blue = Math.round(Math.random() * 255);

    // Combine the red, green, and blue components into an RGB color string
    const colour = `rgb(${red},${green},${blue})`;

    // Set the body's background color to the generated random color
    body.style.backgroundColor = colour;

    // Update the fifth button's background color to match the generated random color
    randomButton.style.backgroundColor = colour;
}
