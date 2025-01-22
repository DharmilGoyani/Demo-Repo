// keep in mind all middleware is always write above the route handler
const express = require('express');
const app = express();
const port = 3000

// loading middleware into the app
// inbuilt middleware
app.use(express.json());

//middleware -logging, auth , validation

// -----------------MIDDLEWARES--------------------
//application level middleware
//creation of middleware
// const loggingMiddleware = function(req, res, next){
//     console.log("LOGING...");
//     next();
// }
// //loading middleware into application
// app.use(loggingMiddleware);

// const authMiddleware = function(req, res, next){
//    console.log("Authentication...");
//    res.send("Back to Home !!"); //using this below code will not run
//     next();
// }
// app.use(authMiddleware);

// const validationMiddleware = function(req, res, next){
//     console.log("Validation...");
//     next();
// } 
// app.use(validationMiddleware);


const route = require('./routes/route');
// mounting routes
app.use('/api',route)

// -> /api/student
// -> /api/admin 

//route handler 
app.get('/',(req,res) => {
    console.log("route handler..");
    
    console.log(req.body);
    res.send("hello world !")
})

app.listen(port , () => {  
    console.log(`Application is started !! at ${port}`);
    
})