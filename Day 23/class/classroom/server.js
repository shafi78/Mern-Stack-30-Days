// // Express router


// const express = require('express');
// const app = express();

// const users = require("./routes/user");
// const posts = require("./routes/post");



// // working with cookies


// const cookieParser = require("cookie-parser");
// app.use(cookieParser());


// app.get("/getcookies",(req,res) => {
//     res.cookie("greet","hello");
//     res.cookie("madeIn","India");
//     res.send("Send you some cookies!");
// })

// app.get("/",(req,res) => {
//     console.dir(req.cookies);
//     res.send("Hi , iam root!");
// })


// // ends here



// app.get("/",(req,res) => {
//     res.send("Hi iam root");
// })

// app.use("/users",users);
// app.use("/posts",posts);


// app.listen(3000,() => {
//     console.log("Listening on port 3000...");
// })






// Express sessions

const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({secret: "mysupersecretstring"}));

app.get("/reqcount",(req,res) => {

    if(req.session.count){
        req.session.count++ ;
    }

    else {
        req.session.count = 1 ;
    }

    res.send(`you sent a request ${req.session.count} times`);
})

app.get("/test",(req,res) => {
    res.send("test successful");
})

app.listen(3000,() => {
    console.log("Server is listening on port 3000...");
})