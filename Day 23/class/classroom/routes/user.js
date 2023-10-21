const express = require("express");
const router = express.Router();

// Users
// index

router.get("/",(req,res) => {
    res.send("GET for users");
})


// show
router.get("/:id",(req,res) => {
    res.send("GET for users id");
})


// post
router.post("/:id",(req,res) => {
    res.send("POST for  users");
})


// delete
router.delete("/:id",(req,res) => {
    res.send("DELETE for  users id");
})

module.exports = router ;