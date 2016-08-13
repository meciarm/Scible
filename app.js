
/*          Files          */

var config      = require("./config.js");
var apiRoutes   = require('./api/routes/routes');


/*        Libraries        */

var express     = require("express");
var path        = require("path");
var bodyParser  = require("body-parser");
var mongodb     = require("mongodb");
var mongoose    = require('mongoose');


/*        Variables        */

var app         = express();
var port        = process.env.PORT || 8080;
var db;         // holds db connection
var server;     // holds connection to the server

/*
// Connect to the database before starting the application server.
mongodb.MongoClient.connect(config.MongoDBUrl(), function (error, database) {

    // Check if connection to MongoDB at config.MongoDBUrl failed.
    if (error) {
        console.log ('ERROR connecting to: ' + config.MongoDBUrl() + '. ' + error);
        process.exit(1);
    } else {
        console.log ('Connected to: ' + config.MongoDBUrl());
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    // Initialize the app on the port AFTER the connection is ready to avoid ...
    // ... errors from database connections before the connection is established.
    server = app.listen(port, function () {
        console.log("App now running on port ", port);
    });

});
*/

///*
// Connect to the database.
mongoose.connect(config.MongoDBUrl(), function (error, database) {
    if (error) {
        console.log ('ERROR Mongoose connecting to: ' + config.MongoDBUrl() + '. ' + error);
        process.exit(1);
    } else {
        console.log ('Mongoose connected to: ' + config.MongoDBUrl());
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    // Initialize the app on the port AFTER the connection is ready to avoid ...
    // ... errors from database connections before the connection is established.
    server = app.listen(port, function () {
        console.log("App now running on port ", port);
    });
});
//*/

/*          API           */

// Add API routes to app located in file (apiRoutes).js .
app.use('/api', apiRoutes);
