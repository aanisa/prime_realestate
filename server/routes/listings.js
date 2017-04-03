var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//define model for each schema below:
var ListingSchema = mongoose.Schema({});
//this doesn't need to contain anything since we are only getting data not saving
var HouseSchema = mongoose.Schema({
  cost: Number,
  sqft: Number,
  city: String
});

var ApartmentSchema = mongoose.Schema({
  rent: Number,
  sqft: Number,
  city: String
});

var Listings = mongoose.model("listings", ListingSchema);

//Both Schema in one listing
var HouseListings = mongoose.model('houses', HouseListingSchema, 'listings');
var AptListings = mongoose.model('apartments', AptListingSchema, 'listings');
//without 3rd property, 'listings', mongo would create a new collection called apartment or house and save the data there
//this 3rd property is where we want to save the new data. It's the existing collection

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

//save the new house listings to the db
router.post('/addHouse', function(req, res) {
//can set var listing = req.body; for readability. since using it in multiple different places

var house = new HouseListings();
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

//save the new apartment listings to the db
router.post('/addApartment', function(req, res) {
var apartment = new AptListings();
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
