var express = require("express"),
    app= express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    User        =require("./models/user"),
    Poll        =require("./models/poll"),
    indexRoutes =require("./routes/index"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local")
    


mongoose.connect("mongodb://localhost/voting_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(require("express-session")({
    secret: "matas je kralj",
    resave: false,
    saveUninitialized: false
}));

app.use("/",indexRoutes);




app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server started....");
});