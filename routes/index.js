var express = require("express"),
    router  = express.Router(),
    bodyParser = require("body-parser"),
    User        =require("../models/user"),
    Poll        =require("../models/poll"),
    passport    =require("passport")

router.get("/", function(req,res){
    res.render("home");
});
router.get("/index",function(req, res) {
    res.render("index");
});

// Register routes
router.get("/register", function(req,res){
    res.render("register");
});
router.post("/register",function(req,res){
    User.register(new User({name:req.body.name, username: req.body.email}),req.body.password,function(err,registeredUser){
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/index");
            });
            
        }
    });
});
// LOGIN routes
router.get("/login",function(req, res) {
    res.render("login");
});
router.post("/login",passport.authenticate("local",{
       successRedirect: "/index",
       failureRedirect: "/login"
    }),function(req,res){
        
    });

module.exports=router;