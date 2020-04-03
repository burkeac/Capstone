// webPingServer.js
// Adam Burke (axb6044@rit.edu)
// April 2, 2020

// This would be hosted by aws or whatever and would deal with the forms too

const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    console.log('Request for HTML page')
    res.sendFile(path.join(__dirname + "/private/webPing.html"));
});

app.get('*', function(req, res){
	res.send('Page not found :(');
});

app.listen(port, function(err) {
	if (err) { conosle.log('error starting server')}
	console.log('"Simple webserver running on port: ' + port + '!')
});