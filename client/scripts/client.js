
$(document).ready(function(){


console.log("HElloppppp");

$.ajax({
  type: "GET",
  url: '/listings',
  success: function (response) {
    console.log('From DB...');
    console.log(response);
  }
});



});
