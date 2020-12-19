/// Pulls information from the doccument.
const form = document.querySelector(".container");
const input = document.querySelector(".container input");
const Valinput = "london"
    /// Event listener for the submit button, along with the 


form.addEventListener("submit", e => {
    e.preventDefault();
});

/// Weather API setup. Uses the NOAA API, as it it better than open weather, and far more reliable.
let key = "472018e923msha4370e43be7a558p159d37jsn6c2d4e161c97"
const genURL = `https://api.openweathermap.org/data/2.5/weather?q=${Valinput}&appid=${key}&units=metric`;

$.ajax(genURL).done(function(response) {
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