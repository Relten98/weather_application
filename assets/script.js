/// City id changed with input in HTML
var cityName = document.getElementById('cityInput').value; // This is just a default value

/// Magic key
const key = 'e0efbfd98a4c5bc87309c276d2b36cd9';



// Current time
function getDate() {
    let date = moment().format('L');
    document.getElementById('date').innerHTML = date;

}


/// loads the weather api & forcast
function searchCity() {
    let cityName = document.getElementById('cityInput').value;

    findWeather(cityName);

}

//// Get City
function findWeather(cityName) {

    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key

    fetch(weatherURL)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
            showWeather(data);
            findUV(data);
        })
        .catch(function () {
            // catch any errors
        });
}


function hideElements() {
    document.getElementById('cityHead').hide
    document.getElementById('cityInput').hide
    document.getElementById('setCity').hide
};


/*
function findForecast(cityName) {
    var forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + key

}
*/

function findUV(d) {
    let lat = d.coord.lat;
    let lon = d.coord.lon;
    // Lat and lon along for uv
    console.log('lattitude : ' + lat);
    console.log('longitude : ' + lon);
    let uvindexURL = "https://api.openweathermap.org/data/2.5/uvi?&appid=" + key + "&lat=" + lat + "&lon=" + lon;

    fetch(uvindexURL)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log('UV IS : ' + data.value);
            document.getElementById('uvIndex').innerHTML = "UV Index : " + data.value;
        })
        .catch(function () {
            // catch any errors
        });
}

function showWeather(d) {

    /// This awful code is what draws the icon.
    /// Sets the visual image depending on the current weather. //
    var currentIcon = document.getElementById("icon").src = "", ;
    var currentWeather = d.weather[0].main;

    if (currentWeather === "clear") {

        var currentIcon = document.getElementById("icon").src = "http://openweathermap.org/img/wn/01d.png";
        currentIcon.attr("style", "height: 60px; width: 60px");

    } else if (currentWeather === "scattered") {

        var currentIcon = document.getElementById("icon").src = "http://openweathermap.org/img/wn/02d.png";
        currentIcon.attr("style", "height: 60px; width: 60px");

    } else if (currentWeather === "clouds") {

        var currentIcon = document.getElementById("icon").src = "http://openweathermap.org/img/wn/04d.png";
        currentIcon.attr("style", "height: 60px; width: 60px");

    } else if (currentWeather === "rain") {

        var currentIcon = document.getElementById("icon").src = "http://openweathermap.org/img/wn/09d.png";
        currentIcon.attr("style", "height: 60px; width: 60px");

    } else if (currentWeather === "thunder") {

        var currentIcon = document.getElementById("icon").src = "http://openweathermap.org/img/wn/11d.png";
        currentIcon.attr("style", "height: 60px; width: 60px");

    } else if (currentWeather === "snow") {

        var currentIcon = document.getElementById("icon").src = "http://openweathermap.org/img/wn/13d.png";
        currentIcon.attr("style", "height: 60px; width: 60px");

    } else if (currentWeather === "fog") {

        var currentIcon = document.getElementById("icon").src = "http://openweathermap.org/img/wn/50d.png";
        currentIcon.attr("style", "height: 60px; width: 60px");
    };
    
    /// ^ This crap is literally Yanderedev levels of trash, but it gets the job done... I guess. 

    // Temperature
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    // document.getElementById('icon').innerHTML = currentIcon;
    document.getElementById('location').innerHTML = d.name + ', ' + d.sys.country;
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;' + 'F' + ' / ' + celcius + '&deg;' + 'C';
    document.getElementById('humidity').innerHTML = "Humidity : " + d.main.humidity;
}

// This is for the five day forecast
function showForecast() {
    return;
}


// Submission button on click event

$("#setCity").on("click", function (event) {
    var cityName = document.getElementById('cityInput').value;
    if (cityName === '') {
        alert('Please input a city');
    } else {
        var searchDiv = $("<button id='saved' class='btn'>").text(cityName);
        var psearch = $("<div>");
        psearch.append(searchDiv)
        $("#searchhistory").prepend(psearch);

        // Preventing the button from trying to submit the form......
        event.preventDefault();
        searchCity(cityName)
    }
});

// Call stored items on page load

// Event deligation...
$("#searchhistory").on('click', '.btn', function (event) {
    let cityName = $(this).text()
    event.preventDefault();
    console.log($(this).text());

    findWeather(cityName);


});

//// Storage
function pageLoad() {

}

// Preloader set up //
$(document).ready(function () {
    getDate()

    // Toggles visibility of elements.
    preloaderFadeOutTime = 1500;
    bodyFadein = 1600;
    function hidePreloader() {
        var preloader = $('.preloader');
        preloader.fadeOut(preloaderFadeOutTime);
    }

    function showElements() {
        var body = $('#container');
        body.fadeIn(bodyFadein);
    }
    hidePreloader();
    showElements();
});

