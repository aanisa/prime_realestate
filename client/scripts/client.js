$(document).ready(function() {
    console.log("HElloppppp");

    getListings();

    // $('.listingTypeSearch').on('change', function() {
    //   console.log('search house');
    //   var value = $(this).val();
    //   alert(value);
    // });

    $('.addListing').on('submit', function(event) {
        event.preventDefault();
        console.log($('#valueOfProperty').val());
        console.log($('#sqftOfProperty').val());
        console.log($('#cityOfProperty').val());
        console.log($('#listingTypeAdd').val());

        var listingType = $('#listingTypeAdd').val();

        if (listingType === 'House') {
            console.log('House Added');
        }

        if (listingType === 'Apartment') {
            console.log('Apartment Added');
        }
    });//


    $('.searchListings').on('submit',function() {
      event.preventDefault();
      console.log($('#listingTypeSearch').val());
    });




    // function addHouseListing() {
    //   $.ajax({
    //     type: "POST",
    //     url: '/listings/addHouse',
    //     success: function (response) {
    //       console.log('To DB...');
    //       console.log(response);
    //       }
    // });
    // }


    // function addAppListing() {
    //   $.ajax({
    //     type: "POST",
    //     url: '/listings/addApartment',
    //     success: function (response) {
    //       console.log('To DB...');
    //       console.log(response);
    //       }
    // });
    // }


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
        if (newArray.rent === undefined) {
            $hl.append('<div class="col-md-2 newListing ">' +
                '<img src="imgs/home.png" alt="house" class="img-responsive">'+
                '<h4>' + newArray.city + '</h4>' +
                '<p>' + newArray.sqft + ' sq.ft</p>' +
                '<p>For Sale: $' + newArray.cost + '</p>' + '</div>');
            // console.log(newArray.cost);
        } //if rent is undefined because it's a house, append listing
        if (newArray.cost === undefined) {
            $al.append('<div class="col-md-2 newListing">' +
                '<img src="imgs/building.png" alt="building" class="img-responsive">'+
                '<h4>' + newArray.city + '</h4>' +
                '<p>' + newArray.sqft + ' sq.ft</p>' +
                '<p>For Rent: $' + newArray.rent + '</p>' + '</div>');
            // console.log(newArray.rent);
        } //if rent is undefined because it's an apartment, append listing
    }
} //loop through array and append to DOM
