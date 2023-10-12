// API token as query string


const express = require("express");
const app = express();

app.use("/api",(req,res,next) => {
    let {token} = req.query ;
    if (token === "giveaccess"){
        next();
    }

    res.send("Access Denied");
})

app.get("/api",(req,res) => {
    res.send("data");
})

app.get("/",(req,res) => {
    res.send("Iam Root")
})

app.get("/random",(req,res) => {
    res.send("This is a random page")
})


// 404

app.use((req,res) => {
    res.send("404 Page Not Found");
})


app.listen(8080,() => {
    console.log("server listening on port 8080");
})