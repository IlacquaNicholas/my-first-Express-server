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

 //GET requests with data. 
 const message = 'Hello from the server';

 //Route function, Endpoint
 //req (request), object
 //res (request), object
app.get('/message', (req, res) => {

console.log('in the get route for /message');
//we need to respond
res.send(message);
})
//New array
const dogs = ['marmaduke', 'Snoopy', 'Scooby Doo'];

app.get('/dogs', (req, res) => {
   console.log('in get for /dogs');
   
   res.send(dogs)
})

app.get('/number',  (req, res)=>{
   res.send({ number: 7 });

})

//Starts server, and listens for requests:
 app.listen(5000, function() {
    console.log('Your first express server is running!');
 });