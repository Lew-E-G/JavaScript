// Select the <body> element from the document
const bodyEl = document.querySelector("body");

// Add an event listener to the <body> element that triggers on mouse movement
bodyEl.addEventListener("mousemove", (event) => {
    // Get the horizontal position of the mouse pointer relative to the viewport
    const xPos = event.clientX;

    // Get the vertical position of the mouse pointer relative to the viewport
    const yPos = event.clientY;

    // Create a new <span> element dynamically
    const spanEl = document.createElement("span");

    // Set the position of the <span> element to match the mouse pointer's location
    spanEl.style.left = xPos + "px"; // Horizontal position
    spanEl.style.top = yPos + "px";  // Vertical position

    // Generate a random size for the <span> element
    const size = Math.random() * 100;

    // Apply the random size to the width and height of the <span> element
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Append the <span> element to the <body>, making it visible on the screen
    bodyEl.appendChild(spanEl);

    // Set a timer to remove the <span> element after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        spanEl.remove(); // Remove the <span> element from the DOM
    }, 3000);
});
