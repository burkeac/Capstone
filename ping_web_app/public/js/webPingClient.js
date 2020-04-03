// webPingClient.js
// Adam Burke (axb6044@rit.edu)
// April 2, 2020

console.log('from external file')

var sumRTL = 0;
var numberOfPings = 0;

function updateHTML(){
    document.getElementById('report').innerHTML = 'calculating...'
    document.getElementById('pingbutton').disabled = true;
}

function ping(){
    console.log('start time: ' + startTime);

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://127.0.0.1:3000/", false);
    xhttp.onload = function() { 
        var endTime = new Date().getTime()
        console.log(xhttp.responseText)
        
        // console.log('end time: ' + endTime)
        
        var RTL = endTime - startTime;
        console.log('time elapsed: ' + RTL);

        sumRTL += RTL;

        console.log(numberOfPings)
        if(numberOfPings < 10){
            numberOfPings++
            setTimeout(function(){ping(); }, 1000)
        }else{
            document.getElementById('report').innerHTML = sumRTL/10 + " ms"
        }
    };
    var startTime = new Date().getTime(); 
    xhttp.send(); 
}