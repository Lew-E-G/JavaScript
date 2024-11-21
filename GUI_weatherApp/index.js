// Import the API key from an external file
import { apiKey } from "./keys.js";

// Base URL for the OpenWeatherMap API with units set to metric
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// DOM elements for the input field, button, and weather icon
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

// Function to fetch weather data for a given city
async function checkWeather(city) {
    // Make a GET request to the API with the city name and API key
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Check if the response status is 404 (city not found)
    if (response.status == "404") {
        // Display the error message and hide the weather details
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // Parse the JSON response from the API
        var data = await response.json();

        console.log(data); // Log the data to the console for debugging

        // Update the DOM with city name and weather details
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Update the weather icon based on the main weather description
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        // Display the weather details and hide the error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Add a click event listener to the search button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); // Call the checkWeather function with the input value
});
