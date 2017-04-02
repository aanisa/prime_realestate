var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var ListingSchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});

var HouseListingSchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});

var AptListingSchema = mongoose.Schema({
  rent: Number,
  sqft: Number,
  city: String
});

var Listings = mongoose.model("listings", ListingSchema);

//Both Schema in one listing
var HouseListing = mongoose.model('House', HouseListingSchema, 'listings');
var AptListing = mongoose.model('Apartment', AptListingSchema, 'listings');


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


router.post('/addHouse', function(req, res) {
var house = new HouseListing();
house.cost = req.body.cost;
house.sqft = req.body.sqft;
house.city = req.body.city;

house.save(function(err, savedHouseList){
  if (err) {
    console.log(err);
    res.sendStatus(500);
  }
  res.send(savedHouseList);
  console.log('got it...saved to DB');
});
});


router.post('/addApartment', function(req, res) {
var apartment = new AptListing();
apartment.rent = req.body.rent;
apartment.sqft = req.body.sqft;
apartment.city = req.body.city;

apartment.save(function(err, savedAptList){
  if (err) {
    console.log(err);
    res.sendStatus(500);
  }
  res.send(savedAptList);
  console.log('got it...saved to DB');
});
});



module.exports = router;
