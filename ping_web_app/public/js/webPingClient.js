// webPingClient.js
// Adam Burke (axb6044@rit.edu)
// April 2, 2020

console.log('from external file')

function ping(){
            
    var startTime = new Date().getTime(); 
    console.log('start time: ' + startTime);

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://127.0.0.1:3000/", true);
    xhttp.onload = function() { 
        console.log(xhttp.responseText)
        
        var endTime = new Date().getTime()
        console.log('end time: ' + endTime)
        console.log('time elapsed: ' + (endTime - startTime))
    };
    xhttp.send(); 
}