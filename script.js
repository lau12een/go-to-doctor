'use strict'
// Shorthand for $( document ).ready()
$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});

/************ Contains info to fetch info*********/
const doctorBaseUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?limit=20&';
const doctorAPIKey = 'bb7ff073337b3fe70c0afe5db792a84a';
const mapsBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
const mapsAPIKey = 'AIzaSyAbngBkssi-HFTJIK7aheGdySmCyATQpbo';

/******** function for query parameters*************/
function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
}

/******Fetch information, if there's an error display a message**************************/

function getDoctorInfo(queryType, query, userCoords, userDistance) {
    const params = {
        user_key: doctorAPIKey,
        query: queryType === 'specialty' ? query : '',
        location: `${userCoords[0]},${userCoords[1]},${userDistance}`
    };
    //Setting up parameters*************/

    const queryString = formatQueryParams(params);
    const url = `${doctorBaseUrl}${queryString}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => {
            if (responseJson.data.length > 0) {
                displayResults(responseJson);
            } else {
                $('.searchResults').empty();
                $('#error-message').text('No results were found');
            }
        })
        .catch(err => {
            $('.searchResults').empty();
            $('#error-message').text('No results were found')
        });
}



/******************Function for addresses********/




// function to get addresses
// function to display addresses






/**********Function to display results ********/









// Watch search form for submit, call getDoctorInfo function
function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchText = $('#search-text').val();
        const maxResults = $('#max-results').val() - 1;
        getDoctorInfo(searchText, maxResults);
    });
}









/*--- When "find doctor " button is clicked , show the search page ---*/

$('#showHiddenSection').click(function () {
    $('#search-page').removeClass('hidden');

    $('#intro-page').addClass('hidden')
});

/*--- When "Find my doctor! " button is clicked , show the search results---*/
$('.search-btn').click(function () {
    $('#searchResults').removeClass('hidden');
    $('#intro-page').addClass('hidden')
});

$('.details-btn').click(function () {
    $('#searchResults').removeClass('hidden');
    $('#intro-page').addClass('hidden');
    $('#details').removeClass('hidden')
});

//const det = document.getElementsByClassName("details-btn");
//const i;

//for (i = 0; i < det.length; i++) {
//  det[i].addEventListener("click", function () {
//    this.classList.toggle("active");
//  const details = this.nextElementSibling;
//if (content.style.display === "block") {
//  content.style.display = "none";
//} else {
//  content.style.display = "block";
//}
//});
//}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
