
$(document).ready(function(){
console.log("HElloppppp");

getListings();


});//doc ready



function getListings() {
  $.ajax({
    type: "GET",
    url: '/listings',
    success: function (response) {
      console.log('From DB...');
      // console.log(response);
      appendListings(response);
      }
  });//GET ajax - get All the listings
}//



function appendListings(array) {
  for (var i = 0; i < array.length; i++) {
    var newArray = array[i];

    var $el = $('.viewListings').append();

    if (newArray.rent === undefined) {
      $el.append('<div class="col-md-3 newListing">'+
                  '<p>' + newArray.city + '</p>' +
                  '<p>'+ newArray.sqft + '</p>' +
                  '<p>' + newArray.cost + '</p>'+'</div>');
      // console.log(newArray.cost);
    }//if rent is undefined because it's a house, append listing
    if (newArray.cost === undefined) {
      $el.append('<div class="col-md-3 newListing">'+
                  '<p>' + newArray.city + '</p>' +
                  '<p>'+ newArray.sqft + '</p>' +
                  '<p>' + newArray.rent + '</p>'+'</div>');
      // console.log(newArray.rent);
    }//if rent is undefined because it's an apartment, append listing
  }
}//loop through array and append to DOM
