
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

      // console.log(newArray.rent);

      if (newArray.rent === undefined) {
        console.log(newArray.cost);
      }
      
      if (newArray.cost === undefined) {
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
