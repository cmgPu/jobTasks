
//imports needed modules and setting up our application to use express as middleware
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express())
//root route will return html text with name of route and will call function  to create new log entry for this route
app.get('', (req, res, next) => {
    //setting response content type as html text
    res.set('Content-Type', 'text/html');
    //sending new buffer which will parse html from given string
    res.send(new Buffer.from('<h1>Root</h1>'));
    //creating new log
    logEvent('/')
    //end current response
    res.end()

})

//about-us route will return html text with name of route and will call function  to create new log entry for this route
app.get('/about-us', (req, res, next) => {
    //setting response content type as html text
    res.set('Content-Type', 'text/html');
    //sending new buffer which will parse html from given string
    res.send(new Buffer.from('<h1>About us</h1>'));
    //creating new log
    logEvent('/about-us')
    //end current response
    res.end()

})
//this route will handle all unmatched routes and will send same response for all of them which will inform user that requested url can not be found
app.get('*', (req, res, next) => {
    //setting response content type as html text
    res.set('Content-Type', 'text/html');
    //sending new buffer which will parse html from given string
    res.send(new Buffer.from('<h1>404-not found</h1>'));
    //creating new log
    logEvent('/404')
    //end current response
    res.end()

})
async function logEvent(route) {
    //creating stream to write our logger txt file
    var stream = fs.createWriteStream("URL_logger.txt", {
        //flag a means stream will be able to append(update) new 
        flags: 'a'
    });
    //adding new passed route to loggger file with current time
    await stream.write(new Date().getHours() + ':' + new Date().getMinutes() + '-' + "\"" + route + '\" \r\n');
    //close append stream
    stream.close()


};

//server will listen to request on post 3000
app.listen(3000, () => {

    console.log("Started on http://localhost:3000");

});