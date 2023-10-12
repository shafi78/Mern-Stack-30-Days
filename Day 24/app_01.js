// Middleware

const express = require("express");
const app = express();


// app.use()

app.use((req,res) => {
    console.log("Hi iam middleware!")
    res.send("Middleware finished")
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


