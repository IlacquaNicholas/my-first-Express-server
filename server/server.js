console.log('Look at my first server!');

//Load the express libray from node_modules/express:
const express = require('express');

//create a varible called "app"  This varivle is...
//THE SERVER:
const app = express();

//Tell express where to find out "public" file. 
 //aka "the client -side" file
 //aka "static assets"
 //aka "all the stuff we've been happily doing already"
 app.use(express.static('./server/public'));

//Starts server, and listens for requests:
 app.listen(5000, function() {
    console.log('Your first express server is running!');
 });