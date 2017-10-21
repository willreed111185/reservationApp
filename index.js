var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var path = require("path");
var TABLE_Num = {tables: process.env.NUM_TABLES || 4};

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tables = [
	{
		name:"Billy",
		email:"1@1.com",
		phone:"1234567899",
		seats:4
	},
	{
		name:"Monica",
		email:"1@1.com",
		phone:"1234567899",
		seats:4
	},
	{
		name:"Ryan",
		email:"1@1.com",
		phone:"1234567899",
		seats:4
	}
];

//route to homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

//route to reservations
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//show all reservations webpage
app.get("/show", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

//API link showing all reservations
app.get("/APIall", function(req, res) {
  res.json(tables);
});
app.get("/config", function(req, res) {
  res.json(TABLE_Num);
});

//post to retrieve new reservation

app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  console.log(newReservation);
  tables.push(newReservation);
  res.json(newReservation);
});

app.listen(PORT,function(){
	console.log("listening to port %s",PORT);
});