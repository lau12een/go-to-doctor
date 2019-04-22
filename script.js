'use strict'

$(function () {
    $('.content').hide();
    $("#error-message").fadeIn();
    $("#error-message").fadeOut(1000);
});

/************ Contains info to fetch info*********/
const doctorBaseUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?';
const doctorAPIKey = 'bb7ff073337b3fe70c0afe5db792a84a';
//const mapsBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';
//const mapsAPIKey = 'mapsAPIkey';


/******** function for query parameters*************/

//function formatQueryParams(params)
function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
}

/******Fetch information, if there's an error display a message**************************/

function getDoctorInfo(query, specialty, state) {
    const params = {
        query: query,
        specialty_uid: specialty,
        location: state,
        skip: 0,
        limit: 100,
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
                $('#searchResults').empty();
                $('#error-message').text(`No results found`);
                $("#error-message").fadeIn();
                $("#error-message").fadeOut(10000);
            }
        })
        // happens when there is an error with the server
        .catch(err => {
            $('#searchResults').empty();
            $('#error-message').text(`No results found: ${err.message}`);
            $("#error-message").fadeIn();
            $("#error-message").fadeOut(10000);
        });
}

// Grabs lat and long values from response Json
//function getLatLong(response) {
//    let lat = response.results[0].geometry.location.lat;
//    let long = response.results[0].geometry.location.lng;
//    let coords = [lat, long];
//    return coords;
//}
/*******Need Function to convert location entered in search to lattitude and longitude, since lat & long are required parameters******/

////function for converting to lat and long from zipcode
//function getLatLong(specialty, zip, radius) {
//    const url = `${mapsBaseUrl}key=${mapsAPIKey}&address=${zip}`;
//    return fetch(url)
//        .then(response => {
//            if (response.ok) {
//                return response.json();
//            }
//            throw new Error(response.statusText);
//        })
//        .then(responseJson => {
//            console.log(responseJson);
//            let latLong = getLatLong(responseJson);
//            getDoctorInfo(specialty, zip, radius);
//        })
//        .catch(err => {
//            $('#error-message').text(`Something went wrong: ${err.message}`)//        });
//}


/**********Function to display results *******/
function displayResults(responseJson) {
    // $('#error-message').empty();
    //$('.doctor-info').empty();
    // Clears previous results
    console.log(responseJson.data);
    let buildTheHtmlOutput = "";
    for (let i = 0; i < responseJson.data.length; i++) {
        console.log(responseJson.data[i]);
        let status = "Not accepting patients";
        if (responseJson.data[i].practices[0].accepts_new_patients == true) {
            status = "Accepting patients";
        }
        buildTheHtmlOutput += `
<div class="doctor-container">
<ul class="doctor-info">
<li class="doctor-card-text doctor-name wrapper">
<span class="docFirstName">${responseJson.data[i].profile.first_name}</span>
<span class="docLastName">${responseJson.data[i].profile.last_name}</span>
<span class="doctor-title">${responseJson.data[i].profile.title}</span>
<span class="docStatus"> ${status}</span>
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
<li>
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
    $('.content').hide();
}


/*--- When "Find my doctor! " button is clicked , show the search results---*/

$('form').submit(event => {
    event.preventDefault();
    const query = $('.search-diagnosis-input').val();
    const specialty = $('.search-doctor-specialty-input').val();
    const state = $('.search-state').val();
    //    const radius = $('.search-distance-input').val();
    console.log(query, specialty, state);
    getDoctorInfo(query, specialty, state);
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
/*--when " click for more details" is clicked, show details --*/
// delegate collapsible
$(document).on('click', '.collapsible', function (event) {
    event.preventDefault();
    $('.content').removeClass('active');
    $(this).parent().find('.content').addClass('active');
    $(this).parent().find('.content').show();
});
