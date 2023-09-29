// Express js

// 1. To listen for incoming requests

// 2. Pass the request

// 3. Match response with routes

// 4. To provide suitable response


const express = require('express');
const app = express();

let port = 8080 ;

app.listen(port,() => {
    console.log("App is listening on port ",port);
});




// app.use 

// Sending a response


app.use((req,res)=> {
    console.log(req);
    console.log("Request recieved");
    
    // res.send({
    //     name: "shafi",
    //     rno: 39
    // });

    let code = "<h1>Hello shafi</h1>"
    res.send(code)
});




// Routing

app.get("/",(req,res) => {
    res.send("You contacted root path");
})

app.get("/apple",(req,res) => {
    res.send("You contacted apple path");
})

app.get("/orange",(req,res) => {
    res.send("You contacted orange path");
})

app.get("*",(req,res) => {
    res.send("This page does not exist");
})

app.post("/",(req,res) => {
    res.send("You sent a post request");
})



// Nodemon : 

// Path parameters :

app.get("/",(req,res) => {
    res.send("You contacted root path");
})

app.get("/:username/:id",(req,res) => {
    let {username , id} = req.params ;
    res.send(`Welcome to the page of ${username}`);
})




// Query Strings

app.get("/search",(req,res) => {
    let {q} = req.query ;
    if (!q){
        res.send("Nothing searched!");
    }
    res.send(`Search results: ${q}`);
})