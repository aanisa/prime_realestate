$(document).ready(function() {
    console.log("HElloppppp");

    getListings();
    addListingbyType();


      $('.searchListings').on('submit', function() {
          event.preventDefault();
          console.log($('#listingTypeSearch').val());

          var listingType = $('#listingTypeSearch').val();
          if (listingType == "House") {
            console.log('Display houses');
            $('.apartment').hide();
            $('.house').show();
          }
          if (listingType == 'Apartment') {
            console.log('Display apartments');
            $('.house').hide();
            $('.apartment').show();
          }
          if (listingType === '') {
            console.log('Display All');
            $('.house').show();
            $('.apartment').show();
          }
          //empty select option
          $('#listingTypeSearch').val('');
      });
    //app breaks when this function is placed outside doc.ready. No idea why :/



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
        var newArray = array[i];

        var $hl = $('.houseListings').append();
        var $al = $('.apartmentListings').append();
        //append listings in two different containers depinding on type
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
    success: function (response) {
      console.log('House To DB...');
      }
});
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
    success: function (response) {
      console.log('Apartment To DB...');
      }
});
}


function addListingbyType() {
    $('.addListing').on('submit', function(event) {
        event.preventDefault();

        var listingType = $('#listingTypeAdd').val();

        if (listingType === 'House') {
            console.log('House Added');
            addHouseListing();
        }//add house listing to DB - if option value is house, assign cost

        if (listingType === 'Apartment') {
            console.log('Apartment Added');
            addAppListing();
        }//add house listing to DB - if option value is apt, assign rent
        //empty input value and select option
        $('#valueOfProperty').val('');
        $('#sqftOfProperty').val('');
        $('#cityOfProperty').val('');
        $('#listingTypeAdd').val('');
    }); //
} //
