/// City id changed with input in HTML
let cityID = 'london';

//// Current time
moment().format('L');

//// Get city
function searchCity(cityname) {
    /// This is the magic key to get the apis to work.
    const key = 'e0efbfd98a4c5bc87309c276d2b36cd9';

    /// URLs for the API
    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + key
    var forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityID + '&appid=' + key

    /// AJAX call to kick this whole thing off
    $.ajax({
        url: weatherURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        console.log(weatherURL);
        //empty divs and ids that we need to dump content into.....
        $("#current").empty();
        var mainDate = moment().format('L');


    });


    //// Forcast AJAX call

    $.ajax({
            url: queryURLforcast,
            method: 'GET'
        }).then(function(response) {
                // Storing an array of results in the results variable
                var results = response.list;
                //empty 5day div--------
                $("#5day").empty();
                //create HTML for 5day forcast................
                for (var i = 0; i < results.length; i += 8) {
                    // Creating a div
                    var fiveDayDiv = $("<div class='card shadow-lg text-white bg-primary mx-auto mb-10 p-2' style='width: 8.5rem; height: 11rem;'>");

                    //Storing the responses date temp and humidity.......
                    var date = results[i].dt_txt;
                    var setD = date.substr(0, 10)
                    var temp = results[i].main.temp;
                    var hum = results[i].main.humidity;

                    //creating tags with the result items information.....
                    var h5date = $("<h5 class='card-title'>").text(setD);
                    var pTemp = $("<p class='card-text'>").text("Temp: " + temp);;
                    var pHum = $("<p class='card-text'>").text("Humidity " + hum);;

                    var currentweather = response.weather[0].main;

                    /// This awful code is what draws the icon.
                    /// Sets the visual image depending on the current weather. //
                    if (currentweather === "Clear") {
                        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/01d.png");
                        currentIcon.attr("style", "height: 60px; width: 60px");
                    } else if (currentweather === "Scattered") {
                        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/02d.png");
                        currentIcon.attr("style", "height: 60px; width: 60px");
                    } else if (currentweather === "Clouds") {
                        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/04d.png");
                        currentIcon.attr("style", "height: 60px; width: 60px");
                    } else if (currentweather === "Rain") {
                        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/09d.png");
                        currentIcon.attr("style", "height: 60px; width: 60px");
                    } else if (currentweather === "Thunder") {
                        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/11d.png");
                        currentIcon.attr("style", "height: 60px; width: 60px");
                    } else if (currentweather === "Snow") {
                        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/13d.png");
                        currentIcon.attr("style", "height: 60px; width: 60px");
                    } else if (currentweather === "Fog") {
                        var currentIcon = $('<img>').attr("src", "http://openweathermap.org/img/wn/50d.png");
                        currentIcon.attr("style", "height: 60px; width: 60px");
                    }
                    /// ^ This crap is literally Yanderedev levels of trash, but it gets the job done... I guess. 
                };







                //// Storage
                function pageLoad() {
                    var lastSearch = JSON.parse(localStorage.getItem("cityName"));
                    var searchDiv = $("<button class='btn border text-muted mt-1 shadow-sm bg-white rounded' style='width: 12rem;'>").text(lastSearch);
                    var psearch = $("<div>");
                    psearch.append(searchDiv)
                    $("#searchhistory").prepend(psearch);
                }


                // When initialized, elements are hidden until after load.
                function hideElements() {
                    $('#content').hide;
                };

                function showElements() {
                    $('#content').show;
                }

                hideElements();

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