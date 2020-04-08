// webPingServer.js
// Adam Burke (axb6044@rit.edu)
// April 7, 2020

// This is the client that would go on the lab computers

// Function for introducing latency
function msleep(n) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

// import and create a new websocket server
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

// Listen and reply to pings
wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		console.log('received: ' + message);
		ws.send('Hello Client!')
	});
});