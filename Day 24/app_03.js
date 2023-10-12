// creating utility middleware

const express = require("express");
const app = express();

app.use((req,res,next) => {
    req.time = new Date();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
})


app.get("/",(req,res) => {
    res.send("Iam Root")
})

app.get("/random",(req,res) => {
    res.send("This is a random page")
})

app.listen(8080,() => {
    console.log("server listening on port 8080");
})
