// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//this is the MODEL for the database  ->used to find and create new assignments below
// var assignments = require('./models/assignments');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json() );

//creates the database
mongoose.connect('localhost:27017/movies');
//mongoose schema
var movieSchema = mongoose.Schema({
  Title: String,
  Year: Number,
  Poster: String,
  ImdbID: String
}); // end movieSchema

var movies = mongoose.model( 'movies', movieSchema );

//creates the port for the server
var port = process.env.Port || 5050;


//base url get function
app.get('/', function(req, res){
  console.log('base url hit', path.resolve ('public/views/index.html'));
  res.sendFile(path.resolve('public/views/index.html'));
});

//spins up server
app.listen(port, function(){
  console.log('listening on 5050 ->', port);
});
