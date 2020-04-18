// webPingClient.js
// Adam Burke (axb6044@rit.edu)
// April 7, 2020

var sumRTL = 0;
var numberOfPings = 0;
var pingTimes = [];
const totalPings = 20;

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
            var rtl = endTime - startTime;
            sumRTL += rtl;
            pingTimes.push(rtl);

            console.log('ping number: ' + numberOfPings + ' ping time: ' + rtl)
            
            if(numberOfPings < totalPings){
                numberOfPings++;
                sendRecvPing();
            }else{
                document.getElementById('averagePing').value = sumRTL/totalPings + " ms"
                document.getElementById('pingResult').value = pingTimes;
            }
        };
    }
}

function updateOther() {
    var worktType = document.getElementById('typeOfWork');
    var other = document.getElementById("other");

    if(worktType.value == 'other'){
        other.type = "text";
        other.requred = true;
    }else{
        other.type = "hidden";
        other.requred = false;
        other.value = "";
    }
}