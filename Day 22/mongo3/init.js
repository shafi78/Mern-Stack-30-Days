const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");

main()
.then(() => console.log("Connection successful"))
.catch((err) => console.log(err))


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}


let allChats = [
    {
        from: "shafi",
        to: "sameer",
        msg: "send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "yusuf",
        to: "saif",
        msg: "message from yf to saif",
        created_at: new Date()
    },
    {
        from: "sohail",
        to: "ashpak",
        msg: "message from sohail to ashpak",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);