//https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=40.758896%2C-73.985130%2C50&skip=0&limit=10&user_key=bb7ff073337b3fe70c0afe5db792a84a
//https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=40.758896%252C-73.985130%252C50&skip=0&limit=10&user_key=bb7ff073337b3fe70c0afe5db792a84a
// issue with above link is that "52" is added into the lat and long, but do not know how to get it out or why it is appearig

'use strict'
// Shorthand for $( document ).ready()
$(function () {
    //  console.log('App loaded! Waiting for submit!');
    //    watchForm();
});

/************ Contains info to fetch info*********/
const doctorBaseUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?';
const doctorAPIKey = 'bb7ff073337b3fe70c0afe5db792a84a';
const mapsBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
const mapsAPIKey = 'AIzaSyAbngBkssi-HFTJIK7aheGdySmCyATQpbo';

/*******Need Function to convert location entered in search to lattitude and longitude, since lat & long are required parameters******/



    //function conversion(location, dist){
    // Create URL for geocoding a location






/******** function for query parameters*************/




    //function formatQueryParams(params)


/******Fetch information, if there's an error display a message**************************/

function getDoctorInfo(specialty, zip, radius) {
    const params = {
        specialty_uid: specialty,
        location: '40.758896%2C-73.985130%2C50',
        skip: 0,
        limit: 10,
        user_key: doctorAPIKey,
    };
    //Setting up parameters*************/

    const queryString = formatQueryParams(params);
    const url = `${doctorBaseUrl}${queryString}`;
    console.log(url);
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => {
            console.log(responseJson);
            if (responseJson.data.length > 0) {
                displayResults(responseJson);
                $('#searchResults').removeClass('hidden');
                $('#intro-page').addClass('hidden')
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









/*--- When "Find my doctor! " button is clicked , show the search results---*/

$('form').submit(event => {
    event.preventDefault();
    const specialty = $('.search-doctor-specialty-input').val();
    const zip = $('.search-zip-input').val();
    const radius = $('.search-distance-input').val();
    console.log(specialty, zip, radius);
    getDoctorInfo(specialty, zip, radius);
});









/*--- When "find doctor " button is clicked , show the search page ---*/

$('#showHiddenSection').click(function () {
    $('#search-page').removeClass('hidden');

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
