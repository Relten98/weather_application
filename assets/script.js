function weatherBalloon(cityID) {
    var key = 'e0efbfd98a4c5bc87309c276d2b36cd9';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            drawWeather(data); // Call drawWeather
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
}

window.onload = function() {
    weatherBalloon(6167865);
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('country').innerHTML = d.sys.country;
}



// When initialized, elements are hidden until after load.
function hideElements() {
    $('#content').hide;
};

function showElements() {
    $('#content').show;
}
hideElements();

/// Sets the visual image depending on the current weather. //
var weatherIcon = []


// Preloader set up //
$(document).ready(function() {

    // Toggles visibility of elements.

    preloaderFadeOutTime = 1000;

    function hidePreloader() {
        var preloader = $('.preloader');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    showElements();
});