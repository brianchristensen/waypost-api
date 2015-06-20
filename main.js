/**
 * Created by brian on 6/19/15.
 */
var express = require('express');
var db = require('./models/dbcontext');
var app = express();

// bind the _app to listen for connections on a specified port
var appPort = process.env.PORT || 8081;

// start server
var server = app.listen(appPort, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Waypost app listening at http://%s:%s', host, port);

});

// build waypost app container
var waypost = {
    app: app,
    db: db
};

// import routes and inject waypost
require('./api/routes')(waypost);