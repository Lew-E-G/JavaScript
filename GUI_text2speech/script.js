const textArea = document.querySelector("textarea"); // Select the textarea input
const button = document.querySelector("button"); // Select the button
let isSpeaking = true; // Flag to track speaking state
const synth = window.speechSynthesis; // SpeechSynthesis API instance

// Function to handle text-to-speech conversion
const textToSpeech = () => {
    const text = textArea.value; // Get the text from the textarea

    // If not currently speaking and text exists, start speaking
    if (!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text); // Create a speech instance
        synth.speak(utterance); // Speak the text
    }

    // Handle pause/resume logic for long texts
    if (text.length > 50 && synth.speaking) {
        if (isSpeaking) {
            button.innerText = "Pause"; // Update button text to "Pause"
            synth.resume(); // Resume speech
            isSpeaking = false; // Update speaking state
        } else {
            button.innerText = "Resume"; // Update button text to "Resume"
            synth.pause(); // Pause speech
            isSpeaking = true; // Update speaking state
        }
    }else{
        isSpeaking = false;
        button.innerText = "Speaking"
    }
};

// Polling to reset button text when speech ends
setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
        isSpeaking = true; // Reset speaking state
        button.innerText = "Convert 2 Speech"; // Reset button text
    }
}, 100); // Check every 100ms

button.addEventListener("click", textToSpeech); // Attach click event to the button
