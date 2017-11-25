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
  //get input url and make
  var input = req.params.date;
  var date = new Date(input);
  
  var formatter = new Intl.DateTimeFormat("en-US", { month: "long" })
  var  month1 = formatter.format(new Date(date));
  
  /*var response = {
    "natural": date.getDay() + ' ' + date.getMonth()+1) + ', ' + date.getYear()
  };*/
  //var date = new Date(input).getTime();
  console.log(input);
  res.send(month1);
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
