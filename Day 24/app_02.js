// using next

const express = require("express");
const app = express();

app.use((req,res,next) => {
    console.log("Hi iam 1st middleware!")
    next();
})

app.use((req,res,next) => {
    console.log("Hi iam 2 middleware!")
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