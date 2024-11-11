const apiKey = null
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric"

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json

    console.log(data)
}

checkWeather()