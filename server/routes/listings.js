var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var ListingSchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});

var Listings = mongoose.model("Listing", ListingSchema);

//Both Schema in one listing
var users = mongoose.model('User', loginUserSchema, 'users');
var registerUser = mongoose.model('Registered', registerUserSchema, 'users');


  //get all the listings from the DB
router.get('/', function(req, res) {

//find and send the listings, if err send status code

  Listings.find(function(err, allListings) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(allListings);
    console.log('sending...sent');
  });
});


module.exports = router;
