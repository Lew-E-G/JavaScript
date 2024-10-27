let secondsElapsed = 0;  // Keeps track of the total seconds passed
let interval = null;  // Stores the interval ID for the running timer
const time = document.getElementById("time")  // Reference to the HTML element where the time is displayed

// Pads the given value with a leading zero if it's less than 2 digits
function padStart(value) {
    return String(value).padStart(2, "0")
}

// Calculates and updates the displayed time in minutes and seconds
function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);  // Convert elapsed seconds into minutes
    const seconds = secondsElapsed % 60;  // Get the remaining seconds after dividing by 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;  // Display the time in "MM:SS" format
}

// Increments the elapsed time by one second and updates the displayed time
function timer() {
    secondsElapsed++;  // Increment the total elapsed time by 1 second
    setTime();  // Update the time display
}

// Starts the timer and sets an interval to call the `timer` function every second
// TODO: Add the intervals functionality to the start button
function startClock() {
    if (!interval) {  // If a timer is already running, stop it before starting a new one
    interval = setInterval(timer, 1000);
    }  // Set an interval to run the `timer` function every second
}

// Stops the running timer by clearing the interval
function stopClock() {
    clearInterval(interval);  // Stop the interval timer
    interval = null
}

// Resets the timer by stopping it, resetting the elapsed time to zero, and updating the display
function resetClock() {
    interval = null;
    stopClock();  // Stop the running timer
    secondsElapsed = 0;  // Reset the elapsed time to zero
    setTime();  // Update the display to show "00:00"
}
