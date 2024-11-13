//import { apiKey } from "./keys";
const apiKey = "a479a2b4e8243ea63fef94a3c039ec21";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=york&units=metric"

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather()