// Templating

const express = require("express");
const app = express();
const path = require("path");

const port = 8080 ;

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"))

app.get("/",(req,res) => {
    res.render("home.ejs");
})

app.get("/ig/:username",(req,res) => {
    let {username} = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    if (data){
        res.render("instagram",{data});
    }
    else {
        res.render("error.ejs");
    }
})

app.get("/hello",(req,res) => {
    res.send("Hello");
})

app.get("/rolldice",(req,res) => {
    let diceVal = Math.floor(Math.random()*6)+1 ;
    res.render("rollDice.ejs",{num:diceVal});
})

app.listen(port,() => {
    console.log("Listening on port ",port);
})




// Interpolation Syntax

