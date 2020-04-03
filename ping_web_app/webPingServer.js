// webPingServer.js
// Adam Burke (axb6044@rit.edu)
// April 2, 2020

// This is the client that would go on the lab computers

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
// const sleep = require('sleep')

function msleep(n) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
  }

// Allow for the AJAX through the use of cors. 
// AKA allow requests from html pages that originated from a different address.
app.use(cors({
    origin: 'http://127.0.0.1:4000',
    credentials: true
  }));

app.get('/', function(req, res){
	// console.log('ajax request')
	// msleep(2000);
	res.send('Ping Reply - Hi there! :-)')
});

app.get('*', function(req, res){
	res.send('I mean, I guess this works too...');
});

app.listen(port, function(err) {
	if (err) { conosle.log('error starting server')}
	console.log('"Web Ping Service running on port: ' + port + '!')
});