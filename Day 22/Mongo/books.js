const mongoose = require('mongoose');

main().then(() => console.log("connection successful"))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}


const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: [20,"Only 20 characters allowed"]
    },

    author: {
        type: String
    },

    price: {
        type: Number
    },

    category: {
        type: String,
        enum: ['fiction,non-fiction']
    }

});

const Book = mongoose.model("Book",booksSchema);

let book1 = new Book({
    title: "Maths",
    author: "RD Sharma",
    price: 1200,
    category: "fiction"
})

book1.save()
.then((res) => {
    console.log(res)
})

.catch((err) => {
    console.log(err)
})



// Error : missing title (required field)

let book2 = new Book({
    author: "RD Sharma",
    price: 1200
})

book2.save()
.then((res) => {
    console.log(res)
})

.catch((err) => {
    console.log(err)
})