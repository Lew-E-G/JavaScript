// Array to store the list of items
let items = [];

// DOM elements for displaying items and taking user input
const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");

// Key for storing and retrieving data from localStorage
const storageKey = "items";

// Function to render the list of items in the DOM
function renderItem() {
    // Clear the current content of the itemsDiv
    itemsDiv.innerHTML = null;

    // Loop through the items array with indices
    for (const [idx, item] of Object.entries(items)) {
        // Create a container div for each item
        const container = document.createElement("div");
        container.style.marginBottom = "10px"; // Add some space between items

        // Create a paragraph element to display the item's text
        const text = document.createElement("p");
        text.style.display = "inline"; // Display text inline with the button
        text.style.marginRight = "10px"; // Add space between the text and the button
        text.textContent = item; // Set the text content to the item

        // Create a button to allow deleting the item
        const button = document.createElement("button");
        button.textContent = "Delete"; // Set the button label
        button.onclick = () => removeItem(idx); // Attach an event listener to handle deletion

        // Append the text and button to the container
        container.appendChild(text);
        container.appendChild(button);

        // Append the container to the itemsDiv
        itemsDiv.appendChild(container);
    }
}

// Function to load items from localStorage
function loadItems() {
    const oldItems = localStorage.getItem(storageKey); // Get stored items as a string
    if (oldItems) items = JSON.parse(oldItems); // Parse the string into an array
    renderItem(); // Render the items in the DOM
}

// Function to save the current items array to localStorage
function saveItem() {
    const stringItems = JSON.stringify(items); // Convert the items array to a string
    localStorage.setItem(storageKey, stringItems); // Store the string in localStorage
}

// Function to add a new item to the list
function addItem() {
    const value = input.value; // Get the value from the input field
    if (!value) { // Check if the input is empty
        alert("Nope"); // Alert the user if input is empty
        return; // Exit the function
    }
    items.push(value); // Add the new item to the array
    renderItem(); // Re-render the updated list
    input.value = ""; // Clear the input field
    saveItem(); // Save the updated list to localStorage
}

// Function to remove an item from the list by index
function removeItem(idx) {
    items.splice(idx, 1); // Remove the item at the specified index
    renderItem(); // Re-render the updated list
    saveItem(); // Save the updated list to localStorage
}

// Event listener to load items when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", loadItems);
