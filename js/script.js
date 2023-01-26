let apiKey = "457cd782af9525fc04742f44aa72ea16";
let getbutn = document.querySelector("#searchBtn");
var Divs = document.querySelector('#present')
var weathersplit = document.querySelector('#forecast12345')
var one = document.querySelector('.one')
var two = document.querySelector('.two')
var three = document.querySelector('.three')
var four = document.querySelector('.four')
var five = document.querySelector('.five')

function pushweather(cityValue) {
    var URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${apiKey}&units=imperial&date=long`;
    
    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            Weather1(data)
           
           Weatherresults(data)
        })
}


function Weather1(currentData) {
    console.log(currentData)
    var HTML =`
    <h2>${currentData.city.name} Current Weather</h2>
    <img src="http://openweathermap.org/img/wn/${currentData.list[0].weather[0].icon}@2x.png" alt="">
    <p>Temp: ${currentData.list[0].main.temp} °F</p>
    <p>Humidity:  ${currentData.list[0].main.humidity} %</p>
    <p>Wind Speed: ${currentData.list[0].wind.speed} mps</p>
    `
    
    Divs.innerHTML = HTML
}



function Weatherresults(forecastData) {
    console.log(forecastData)
    var Updated = `
    <h3>Here is the 5-Day Forecast: <h3>
    
    <p>${new Date(forecastData.list[3].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[3].weather[0].icon}@2x.png" alt="">
    <p>Temperature: ${forecastData.list[3].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[3].main.humidity} %</p>
    <p>Wind Speeds: ${forecastData.list[3].wind.speed} mps</p>
    `
    one.innerHTML = Updated;

    Updated= 
    `<p>${new Date(forecastData.list[11].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[11].weather[0].icon}@2x.png" alt="">
    <p>Temperature: ${forecastData.list[11].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[11].main.humidity} %</p>
    <p>Wind Speeds: ${forecastData.list[11].wind.speed} mps</p>`
    two.innerHTML = Updated;

    Updated= 
    `<p>${new Date(forecastData.list[19].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[19].weather[0].icon}@2x.png" alt="">
    <p>Temperature: ${forecastData.list[19].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[19].main.humidity} %</p>
    <p>Wind Speeds: ${forecastData.list[19].wind.speed} mps</p>`
    three.innerHTML = Updated;

    Updated= 
    `<p>${new Date(forecastData.list[27].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[27].weather[0].icon}@2x.png" alt="">
    <p>Temperature: ${forecastData.list[27].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[27].main.humidity} %</p>
    <p>Wind Speeds: ${forecastData.list[27].wind.speed} mps</p>`
    four.innerHTML = Updated;

    Updated= 
    `<p>${new Date(forecastData.list[35].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[35].weather[0].icon}@2x.png" alt="">
    <p>Temperature: ${forecastData.list[35].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[35].main.humidity} %</p>
    <p>Wind Speeds: ${forecastData.list[35].wind.speed} mps</p>`
    five.innerHTML = Updated;
}


getbutn.addEventListener('click', function(){
    const vageli = document.querySelector(".cityInput");
    var town = vageli.value;
    pushweather(town)
     
});

