function getListings(){$.ajax({type:"GET",url:"/listings",success:function(a){console.log("From DB...");for(var b=0;b<a.length;b++){a[b]}}})}function appendListings(a){for(var b=0;b<a.length;b++){a[b],$(".viewListings").append("<div></div>")}}$(document).ready(function(){console.log("HElloppppp"),$.ajax({type:"GET",url:"/listings",success:function(a){console.log("From DB...");for(var b=0;b<a.length;b++){var c=a[b];void 0===c.rent&&console.log(c.cost),void 0===c.cost&&console.log(c.rent)}}})});