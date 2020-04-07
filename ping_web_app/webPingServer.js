// webPingServer.js
// Adam Burke (axb6044@rit.edu)
// April 7, 2020

// This is the client that would go on the lab computers


function msleep(n) {
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 3000 });
 
wss.on('connection', function connection(ws) {
ws.on('message', function incoming(message) {
	console.log('received: ' + message);
	// msleep(1000)
	ws.send('Hello Client!')
});
});