/**
 * Created by brian on 6/19/15.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World  ----  WAYPOST!');
});

// bind the app to listen for connections on a specified port
var appPort = process.env.PORT || 3000;

var server = app.listen(appPort, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});