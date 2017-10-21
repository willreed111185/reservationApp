var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("some thing very cool");
});

app.listen(PORT,function(){
	console.log("listening to port %s",PORT);
});
