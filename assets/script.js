/// Weather API setup. Uses the NOAA API, as it it better than open weather, and far more reliable.
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "472018e923msha4370e43be7a558p159d37jsn6c2d4e161c97",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
};

$.ajax(settings).done(function(response) {
    console.log(response);
});


// When initialized, elements are hidden until after load.
function hideElements() {
    $('.content').hide;
};

function showElements() {
    $('.content').show;
}
hideElements();

/// Sets the visual image depending on the current weather.
var weatherIcon = []


// Preloader set up
$(document).ready(function() {

    //Hides the preloader when the page is loaded, and shows the content.

    preloaderFadeOutTime = 1000;

    function hidePreloader() {
        var preloader = $('.preloader');
        preloader.fadeOut(preloaderFadeOutTime);
    }


    hidePreloader();
    showElements();
});






/* Info for the loading animmation:

  Loading animation for Authentic Weather ~ http://authenticweather.com
  -- Made in collaboration with Tobias van Schneider :
  -- http://www.vanschneider.com/

  */