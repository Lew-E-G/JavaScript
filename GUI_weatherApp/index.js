//const apiKey = require('./keys')
const apiKey = "a479a2b4e8243ea63fef94a3c039ec21"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric"

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)
}

checkWeather()