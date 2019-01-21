var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

//mount static assests
app.use(express.static('src'));

//basic html-routing
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//api routing
app.get("/api/whoami", function (req, res) {
  res.json({ipaddress : req.ip, language: req.headers['accept-language'], software: req.headers['user-agent']});
});

// 404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
})

// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
