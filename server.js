// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/:date', function (req, res){
  //get input url
  var input = req.params.date;
  //attempt to make a date
  var date = new Date(input);
  //create a formatter for the month name
  var formatter = new Intl.DateTimeFormat("en-US", { month: "long" })
  //apply to get month
  var  monthName = formatter.format(new Date(input));
  
  var response = {
    "natural": date.getDate() + ' of ' + monthName + ', ' + date.getFullYear(),
    "unixtime": date.getTime()/1000
  };
  //var date = new Date(input).getTime();
  console.log(input);
  res.send(response);
});

/*app.get("/dreams", function (request, response) {
  response.send(dreams);
});*/

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
/*app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});*/

// Simple in-memory store for now
/*var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];*/

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
