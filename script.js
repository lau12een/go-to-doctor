//https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=40.758896%2C-73.985130%2C50&skip=0&limit=10&user_key=bb7ff073337b3fe70c0afe5db792a84a
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
function getLocation(userZip, queryType, query, userDistance) {
    const url = `${mapsBaseUrl}key=${mapsAPIKey}&address=${userZip}`;

    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => {
            let userCoords = getCoords(responseJson);
            getDoctorInfo(queryType, query, userCoords, userDistance);
        })
        .catch(err => {
            $('#error-message').text(`Something went wrong: ${err.message}`)
        });
}

// Grabs lat and long values from response Json
function getCoords(response) {
    let lat = response.results[0].geometry.location.lat;
    let long = response.results[0].geometry.location.lng;
    let coords = [lat, long];
    return coords;
}








/******** function for query parameters*************/




//function formatQueryParams(params)
function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
}

/******Fetch information, if there's an error display a message**************************/

function getDoctorInfo(specialty, zip, radius) {
    const params = {
        specialty_uid: specialty,
        location: '40.758896,-73.985130,50',
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
function displayResults(responseJson) {
    console.log(responseJson.data);
    let buildTheHtmlOutput = "";

    for (let i = 0; i < responseJson.data.length; i++) {
        console.log(responseJson.data[i]);
        buildTheHtmlOutput += `
<div class="doctor-container">
<ul class="doctor-info">

<li class="doctor-card-text doctor-name wrapper">
<span class="docFirstName">${responseJson.data[i].profile.first_name}</span>
<span class="docLastName">${responseJson.data[i].profile.last_name}</span>
<span class="doctor-title">${responseJson.data[i].profile.title}</span>
<span class="docStatus">Accepts new patients? ${responseJson.data[i].practices[0].accepts_new_patients}</span>
</li>
<li class="wrapper">
<ul class="contact-info">
<li class="office-location-title doctor-card-text">${responseJson.data[i].practices[0].name}</li>
<li class="doctorStreet">${responseJson.data[i].practices[0].visit_address.street}</li>
<li class="doctorCity">${responseJson.data[i].practices[0].visit_address.city}</li>
<li class="doctorNumber">${responseJson.data[i].practices[0].phones[0].number}</li>
</ul>
</li>
<li class="wrapper">
<img src="${responseJson.data[i].profile.image_url}" class="doctor-img" alt="Image of Dr">
</li>
<li class="wrapper">
<button class="collapsible">Click for more details</button>
<div class="content">
<p>${responseJson.data[i].profile.bio}</p>
</div>
</li>
</ul>
</div>
`;
    }

    $("#searchResults").html(buildTheHtmlOutput);
}








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
