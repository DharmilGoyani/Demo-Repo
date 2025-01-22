const express = require('express');
const router = express.Router();

//middlewares

const auth = function(req,res,next){
    console.log("inside auth middleware..");
    
    req.user = {userId:1,role:"student"};  // dummy user

    if(req.user){
        // if valid user then proceed to next middleware
        next();
    }
    else{
        //if not valid user
        res.json({
            success:false,
            message: "Not a valid User",
        })
    } 
    
} 

const isStudent = function(req,res,next){
    console.log("inside isStudent middleware..");
    
    if(req.user.role === "student"){
        next();
    }
    else{
        res.json({
            success:false,
            message: "Access Denied , this route is only for students"
        })
    }
}

const isAdmin = function(req,res,next){
    console.log("inside isAdmin middleware..");
    
    if(req.user.role === "admin"){
        next();
    }
    else{
        res.json({
            success:false,
            message: "Access Denied: this route is only for admins"
        })
        // res.send("This route is only for ADMINS")
    }
}

//routes

router.get("/" ,(req,res) => {
    res.send("inside API ...")
})

router.get("/student", auth, isStudent, (req,res) => {
    console.log("Inside student route");
    res.send("Student Specific Page")
})

router.get("/admin", auth, isAdmin, (req,res) => {
    console.log("Inside admin route");
    res.send("Admin Specific Page")
})

module.exports = router;