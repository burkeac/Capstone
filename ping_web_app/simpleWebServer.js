// webPingServer.js
// Adam Burke (axb6044@rit.edu)
// April 2, 2020

// This would be hosted by aws or whatever and would deal with the forms too

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const requestIP = require('request-ip');

const port = 4000;
const responseFileName = "Responses.csv";

app.use(express.urlencoded({extended: true}));
app.use(requestIP.mw())
app.use('/public', express.static('public'));

// main page!
app.get('/', function(req, res){
    // console.log('Request for HTML page')
    res.sendFile(path.join(__dirname + "/private/Survey.html"));
});

app.post('/', (req, res) => {

	var ip = req.clientIp

	// Format results
	results = String(
		'"' + ip + '","'
		+ req.body.WhichLab + '","'
		+ req.body.q2 + '","'
		+ req.body.q3 + '","'
		+ req.body.typeOfWork + '","'
		+ req.body.otherTypeOfWork + '","'
		+ req.body.softwareTask + '","' 
		+ req.body.additionalComments + '","' 
		+ req.body.pingResult + '","'
		+ req.body.averagePing + '"'
	)

	console.log(results);

	// Save to file
	fs.appendFile((responseFileName), results + '\n', function (err) {
		if (err) throw err;
	})
	
	res.redirect("/thankyou")
})

// Thank you page
app.get('/thankyou', function(req, res){
	// console.log('Request for HTML page')
    res.sendFile(path.join(__dirname + "/private/thankyou.html"));
});

// Thank you page
app.get('/ping', function(req, res){
	// console.log('Request for HTML page')
    res.sendFile(path.join(__dirname + "/private/webPing.html"));
});

// not found
app.get('*', function(req, res){
	res.send('Page not found :(');
});

app.listen(port, function(err) {
	if (err) { conosle.log('error starting server')}
	console.log('"Simple webserver running on port: ' + port + '!')
});