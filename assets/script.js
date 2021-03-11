
/// Magic key
const key = 'e0efbfd98a4c5bc87309c276d2b36cd9';

/*
// Automagically sets the background gradiant to a different color based on the time the application is opened.
let time = moment().format('h');
let t = time

var html = document.getElementsByTagName("html")

if (t < 10) {
    console.log("Setting to morning")
    html.style.background = "background: linear-gradient(-45deg, #dbd4ad, #ebbc22);";
} else if (t > 12) {
    console.log("Setting night")
    html.style.background = "background: linear-gradient(-45deg, #46486E, #3a2144);";
} else {
    console.log("Setting to day")
    html.style.background = "background: linear-gradient(-45deg, #61b0d4, #2f6cb3);";
};
*/

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

//// Get city
function findWeather(cityName) {

    let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key

    fetch(weatherURL)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
            showWeather(data);
        })
        .catch(function () {
            // catch any errors
        });

}


function hideElements() {
    $('#body').hide;
};


hideElements();

function findForecast(cityName) {
    let forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + key

}

function findUV() {
    let findUVURL = "https://api.openweathermap.org/data/2.5/uvi?&appid=" + key + "&lat=" + lat + "&lon=" + lon;

}

function showWeather(d) {

    /// This awful code is what draws the icon.
    /// Sets the visual image depending on the current weather. //
    /*
    var currentWeather = d.weather[0].description


    if (currentWeather === "clear") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentWeather === "scattered") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/02d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentWeather === "clouds") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/04d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentWeather === "overcast clouds") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/04d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentWeather === "rain") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentWeather === "thunder") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/11d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentWeather === "snow") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    } else if (currentWeather === "fog") {
        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/50d.png");
        currentIcon.attr("style", "height: 60px; width: 60px");
    };

 
    /// ^ This crap is literally Yanderedev levels of trash, but it gets the job done... I guess. 
   */
    // Lat and lon along with uv
    let lat = d.coord.lat;
    console.log('lattitude : ' + lat);
    let lon = d.coord.lon;
    console.log('longitude : ' + lon);

    // Temperature
    let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    let fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    // document.getElementById('icon').innerHTML = currentIcon;
    document.getElementById('location').innerHTML = d.name + ', ' + d.sys.country;
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + '&deg;' + 'C';
    document.getElementById('temp2').innerHTML = fahrenheit + '&deg;' + 'F';
    document.getElementById('humidity').innerHTML = "Humidity : " + d.main.humidity;
}

// This is for the five day forecast
function showForecast() {
    return;
}


// Submission button on click event

$("#setCity").on("click", function (event) {
    let cityName = document.getElementById('cityInput').value;

    let searchDiv = $("<button class='btn border text-muted mt-1 shadow-sm bg-white rounded' style='width: 12rem;'>").text(cityName);
    let psearch = $("<div>");
    psearch.append(searchDiv)
    $("#searchhistory").prepend(psearch);

    // Preventing the button from trying to submit the form......
    event.preventDefault();
    searchCity(cityName)
});

// Call stored items on page load

// Event deligation...
$("#searchhistory").on('click', '.btn', function (event) {
    let cityName = $(this).text()
    event.preventDefault();
    console.log($(this).text());
    searchCity($(this).text());
    findWeather(cityName)
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
        let preloader = $('.preloader');
        preloader.fadeOut(preloaderFadeOutTime);
    }

    function showElements() {
        let body = $('#container');
        body.fadeIn(bodyFadein);
    }
    hidePreloader();
    showElements();
});

