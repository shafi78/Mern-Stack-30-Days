const express = require("express");
const router = express.Router();


// posts
// index

router.get("/",(req,res) => {
    res.send("GET for posts");
})


// show
router.get("/:id",(req,res) => {
    res.send("GET for posts id");
})


// post
router.post("/:id",(req,res) => {
    res.send("POST for  posts");
})


// delete
router.delete("/:id",(req,res) => {
    res.send("DELETE for posts id");
})


module.exports = router ;