$(document).ready(function() {
    console.log("HElloppppp");

    getListings();
    addListingbyType();

    // function searchListings() {
    $('.searchListings').on('submit', function() {
        event.preventDefault();
        console.log($('#listingTypeSearch').val());

        var listingType = $('#listingTypeSearch').val();
        if (listingType == "House") {
            console.log('Display houses');
            $('.apartment').hide();
            $('.house').show();
        }//if select 'house' from dropdowm display only the houses
        if (listingType == 'Apartment') {
            console.log('Display apartments');
            $('.house').hide();
            $('.apartment').show();
        }//if select 'apartment' from dropdown display only the houses
        if (listingType === '') {
            console.log('Display All');
            $('.house').show();
            $('.apartment').show();
        }//if don't select from dropdwon, display all listings
        //empty select option
        $('#listingTypeSearch').val('');
    });
    // }
    //this doesn't work breaks when placed in a function :/ ?



}); //doc ready



function getListings() {
    $.ajax({
        type: "GET",
        url: '/listings',
        success: function(response) {
            console.log('From DB...');
            // console.log(response);
            appendListings(response);
        }
    }); //GET ajax - get All the listings
} //



function appendListings(array) {
    for (var i = 0; i < array.length; i++) {
      //to have new ones appear on top: for (var 1=array.length -1; 1>=0, i--);
        var newArray = array[i];

        var $hl = $('.houseListings').append();
        var $al = $('.apartmentListings').append();
        //append listings in two different containers depinding on type of listing

        if (newArray.rent === undefined) {
            $hl.append('<div class="col-md-2 house ">' +
                '<img src="imgs/home.png" alt="house" class="img-responsive">' +
                '<h4>' + newArray.city + '</h4>' +
                '<p>' + newArray.sqft + ' sq.ft</p>' +
                '<p>For Sale: $' + newArray.cost + '</p>' + '</div>');
            // console.log(newArray.cost);
        } //if rent is undefined because it's a house, append listing
        if (newArray.cost === undefined) {
            $al.append('<div class="col-md-2 apartment">' +
                '<img src="imgs/building.png" alt="building" class="img-responsive">' +
                '<h4>' + newArray.city + '</h4>' +
                '<p>' + newArray.sqft + ' sq.ft</p>' +
                '<p>For Rent: $' + newArray.rent + '</p>' + '</div>');
            // console.log(newArray.rent);
        } //if rent is undefined because it's an apartment, append listing
    }
} //loop through array and append to DOM




function addHouseListing() {
    $.ajax({
        type: "POST",
        url: '/listings/addHouse',
        data: {
            cost: $('#valueOfProperty').val(),
            sqft: $('#sqftOfProperty').val(),
            city: $('#cityOfProperty').val()
        },
        success: function(response) {
            console.log('House To DB...');
        }
    });//send input data for new house listing to the server -> db
}

function addAppListing() {
    $.ajax({
        type: "POST",
        url: '/listings/addApartment',
        data: {
            rent: $('#valueOfProperty').val(),
            sqft: $('#sqftOfProperty').val(),
            city: $('#cityOfProperty').val()
        },
        success: function(response) {
            console.log('Apartment To DB...');
        }
    });//send input data for new house listing to the server -> db
}


function addListingbyType() {
    $('.addListing').on('submit', function(event) {
        event.preventDefault();

        var listingType = $('#listingTypeAdd').val();

        if (listingType === 'House') {
            console.log('House Added');
            addHouseListing();
        } //add house listing to DB - if option value is house, assign cost

        if (listingType === 'Apartment') {
            console.log('Apartment Added');
            addAppListing();
        } //add house listing to DB - if option value is apt, assign rent
        //empty input value and select option
        $('#valueOfProperty').val('');
        $('#sqftOfProperty').val('');
        $('#cityOfProperty').val('');
        $('#listingTypeAdd').val('');
    }); //
} //
