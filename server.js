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

function timeService(input){
  //if input is in unix time, multiply by 1000 before making a date object
  if(Number(input)==input) {input *= 1000;}
  //attempt to make a date
  var date = new Date(input);
  console.log(parseInt(date.getTime()/1000));
  //create a formatter for the month name
  var formatter = new Intl.DateTimeFormat("en-US", { month: "long" })
  //apply to get month
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var  monthName = months[date.getMonth()];
  if(monthName!==undefined){
    var response = {
      "natural": date.getDate() + ' of ' + monthName + ', ' + date.getFullYear(),
      "unixtime": date.getTime()/1000
    };   
  } else {
    var response = {
      "natural": null,
      "unixtime": null
    }
  }
  return response;
}

app.get('/:date', function (req, res){
  //get input url
  var input = req.params.date;  
  res.send(timeService(input));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
