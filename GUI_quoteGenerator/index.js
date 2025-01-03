// Array of inspirational quotes
const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Success is how high you bounce when you hit bottom. - George S. Patton",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Act as if what you do makes a difference. It does. - William James",
    "Keep your face always toward the sunshine — and shadows will fall behind you. - Walt Whitman",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Dream big and dare to fail. - Norman Vaughan"
]

// Set to store used indexes to avoid repeating quotes
const usedIndexes = new Set()

// Function to generate and display a random quote
function generateQuote() {
    // If all quotes have been used, clear the set to allow repeats
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()  // Clear the used indexes to restart the process
    }
    
    // Infinite loop to keep generating a new random quote until an unused one is found
    while (true) {
        // Generate a random index based on the number of quotes
        const randomIdx = Math.floor(Math.random() * quotes.length);
        
        // If the quote at the generated index has already been used, skip it
        if (usedIndexes.has(randomIdx)) continue
        
        // Get the quote corresponding to the random index
        const quote = quotes[randomIdx];
        
        // Find the DOM element with the id 'quote' and set its innerHTML to the selected quote
        const quoteElement = document.getElementById("quote");
        quoteElement.innerHTML = quote;

        // Reset the animation by removing and re-adding the class
        quoteElement.classList.remove("typewriter");
        void quoteElement.offsetWidth; // Trigger a DOM reflow, allowing the animation to reset
        quoteElement.classList.add("typewriter");
        
        // Add the used index to the set so it's not used again
        usedIndexes.add(randomIdx)
        
        // Break the loop once a valid quote has been displayed
        break
    }
}