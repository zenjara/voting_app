var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser")
    User        =require("./models/user"),
    Poll        =require("./models/poll")
    
var app= express();

mongoose.connect("mongodb://localhost/voting_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server started....");
});