/// Weather API setup. Uses the NOAA API, as it it better than open weather, and far more reliable.

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://national-weather-service.p.rapidapi.com/products/types/undefined",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "472018e923msha4370e43be7a558p159d37jsn6c2d4e161c97",
        "x-rapidapi-host": "national-weather-service.p.rapidapi.com"
    }
};

/// Sets the visual image depending on the current weather.
var weatherIcon = []


// Preloader set up

$.ajax(settings).done(function(response) {
    console.log(response);
});
$(document).ready(function() {

    //Preloader info

    preloaderFadeOutTime = 500;

    function hidePreloader() {
        var preloader = $('.preloader');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});
/* 
  Loading animation for Authentic Weather ~ http://authenticweather.com
  -- Made in collaboration with Tobias van Schneider :
  -- http://www.vanschneider.com/
*/