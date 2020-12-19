/// Pulls information from the doccument.
const form = document.querySelector(".container");
const input = document.querySelector(".input");
const msg = document.querySelector(".msg");

let key = `e0efbfd98a4c5bc87309c276d2b36cd9`
let cityname = "london"

/// Event listener for the submit button, along with the 


form.addEventListener("submit", e => {
    e.preventDefault();
});

/// Weather API setup. Uses the NOAA API, as it it better than open weather, and far more reliable.
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // do stuff with the data
    });


// When initialized, elements are hidden until after load.
function hideElements() {
    $('.content').hide;
};

function showElements() {
    $('.content').show;
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


// Info for the loading animmation:

/// Loading animation for Authentic Weather ~ http://authenticweather.com
/// -- Made in collaboration with Tobias van Schneider :
/// -- http://www.vanschneider.com/*////