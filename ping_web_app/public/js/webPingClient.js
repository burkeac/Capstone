// webPingClient.js
// Adam Burke (axb6044@rit.edu)
// April 7, 2020

var sumRTL = 0;
var numberOfPings = 0;
const totalPings = 10;

function updateHTML(){
    document.getElementById('report').innerHTML = 'calculating...'
    document.getElementById('pingbutton').disabled = true;
}

function ping(){

    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:3000');

    // When connection is formed, start ping series
    socket.addEventListener('open', function (event) {
        sendRecvPing();
    });
    
    function sendRecvPing(){
        var startTime = new Date().getTime();
        socket.send('Hello Server!');
        
        // Listen for messages
        socket.onmessage = function (event) {
            var endTime = new Date().getTime();
            sumRTL = endTime - startTime;
            console.log(numberOfPings)
            // console.log(endTime - startTime);
            
            if(numberOfPings < totalPings){
                numberOfPings++;
                sendRecvPing();
            }else{
                document.getElementById('report').innerHTML = sumRTL/totalPings + " ms"
            }
        };
    }
}