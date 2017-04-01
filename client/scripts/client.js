
$(document).ready(function(){
console.log("HElloppppp");

// getListings();

$.ajax({
  type: "GET",
  url: '/listings',
  success: function (response) {
    console.log('From DB...');
    // console.log(response);
    for (var i = 0; i < response.length; i++) {
      var newArray = response[i];

      var $el = $('.viewListings').append('<div col-md-3 newListing></div>');


      if (newArray.rent === undefined) {
        $el.append('<p>' + newArray.city + '</p>' +
                    '<p>'+ newArray.sqft + '</p>' +
                    '<p>' + newArray.cost + '</p>');
        console.log(newArray.cost);
      }

      if (newArray.cost === undefined) {
        $el.append('<p>' + newArray.city + '</p>' +
                    '<p>'+ newArray.sqft + '</p>' +
                    '<p>' + newArray.rent + '</p>');
        console.log(newArray.rent);
      }
    }
  }
});//GET ajax - get All the listings


});//doc ready



function getListings() {
  $.ajax({
    type: "GET",
    url: '/listings',
    success: function (response) {
      console.log('From DB...');
      // console.log(response);
      for (var i = 0; i < response.length; i++) {
        var newArray = response[i];

        // console.log(newArray.city);
      }
    }
  });//GET ajax - get All the listings
}//



function appendListings(array) {
  for (var i = 0; i < array.length; i++) {
    var newArray = array[i];
    var $el = $('.viewListings').append('<div></div>');

  }
}//loop through array and append to DOM
