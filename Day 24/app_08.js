// Custom error class
// Default status and message

const express = require("express");
const app = express();
const ExpressError = require('./ExpressError');

const checkToken = (req,res,next) => {
    let {token} = req.query ;
    if (token === "giveaccess"){
        next();
    }

    throw new ExpressError(401,"Access Denied");
}

app.get("/api",checkToken,(req,res) => {
    res.send("data");
})

app.get("/",(req,res) => {
    res.send("Iam Root")
})

app.get("/random",(req,res) => {
    res.send("This is a random page")
})

app.get("/err",(req,res) => {
    abcd = abcd ;
})

app.use((err,req,res,next) => {
    let {status,message} = err ;
    res.status(status).send(message);
});


// 404

app.use((req,res) => {
    res.send("404 Page Not Found");
})


app.listen(8080,() => {
    console.log("server listening on port 8080");
})