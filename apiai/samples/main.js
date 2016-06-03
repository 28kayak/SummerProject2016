//main js
var apiai = require('apiai');
 
var app = apiai("462e5c29c3a34ce8afb5e369d6a17c1d");
 
var request = app.textRequest('turn off the light');
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end()
