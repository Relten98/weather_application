/// City id changed with input in HTML
var cityName = document.getElementById('cityInput').value; // This is just a default value

/// Magic key
const key = 'e0efbfd98a4c5bc87309c276d2b36cd9';

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

//// Current time
function getDate() {
    let date = moment().format('L');
    document.getElementById('date').innerHTML = date + ' : ' + t;

}


/// loads the weather api & forcast
function searchCity() {
    let cityName = document.getElementById('cityInput').value
}

//// Get city
function findWeather(cityName) {

    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key

    fetch(weatherURL)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            showWeather(data);
            console.log(data)
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
    var forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + key


}


function showWeather(d) {

    /// This awful code is what draws the icon.
    /// Sets the visual image depending on the current weather. //
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

    // Lat and lon along with uv
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var findUVURL = "https://api.openweathermap.org/data/2.5/uvi?&appid=" + key + "&lat=" + lat + "&lon=" + lon;


    // Temperature
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('location').innerHTML = d.name + ', ' + d.sys.country;
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('icon').innerHTML = currentIcon;
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
    var cityName = document.getElementById('cityInput').value;
    pageLoad(cityName)
    // Preventing the button from trying to submit the form......
    event.preventDefault();
    // Storing the city name........
    var buildCity = $(cityName);

    //save search term to local storage.....
    var textContent = $(this).siblings("input").val();
    var storearr = [];

    storearr.push(textContent);
    localStorage.setItem(cityName, JSON.stringify(storearr));

    searchCity(buildCity);
    findWeather(cityName);
});

// Call stored items on page load

// Storage
function pageLoad() {
    searchCity()
    var lastSearch = JSON.parse(localStorage.getItem(cityName));
    var searchDiv = $(`<button id='${lastSearch}' class='btn border text-muted mt-1 shadow-sm bg-white rounded' style='width: 12rem;'>`).text(lastSearch);
    var psearch = $("<div>");
    psearch.append(searchDiv)
    $("#searchhistory").prepend(psearch);
}

// Event deligation...
$("#searchhistory").on('click', '.btn', function (event) {
    var buildCity = $(cityName);
    event.preventDefault();
    searchCity(buildCity);
    findWeather(cityName);

});


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

