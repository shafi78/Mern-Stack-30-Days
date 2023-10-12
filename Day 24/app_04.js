// Exploring app.use()

const express = require("express");
const app = express();

app.use("/random",(req,res,next) => {
    console.log("iam only for random");
    next();
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