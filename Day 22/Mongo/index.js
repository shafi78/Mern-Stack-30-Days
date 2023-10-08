const mongoose = require('mongoose');

main().then(() => console.log("connection successful"))
.catch(err => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}



// schema : defines the shape of the documents within that collection

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});



// Model: model in mongoose is a class with which we construct document

const User = mongoose.model("User",userSchema);


// inserting single value

const user1 = new User({
    name: "shafi",
    email: "shafi@gmail.com",
    age: 22
});

const user2 = new User({
    name: "sameer",
    email: "sameer@gmail.com",
    age: 25
});

user2.save()
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})



// Inserting Many values

User.insertMany([
    {name: "sameer",email: "sam@gmail.com",age: 26},
    {name:"yusuf",email:"yusuf@gmail.con",age:22},
    {name:"saif",email:"saif@gmail.com",age:22}
])
.then((res) => {
    console.log(res)
})




// Find (use mongoose documentation)

User.find({age: {$gt: 25}}).then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})




// Update 

User.updateOne({name: "sameer"},{age:30})
.then((res) => {
    console.log(res)
})

.catch((err) => {
    console.log(err)
})



User.findOneAndUpdate({name: "sameer"},{age:30})
.then((res) => {
    console.log(res)
})

.catch((err) => {
    console.log(err)
})



User.findByIdAndUpdate({_id: "65210b0b06b6124d2e686094"},{age:35})
.then((res) => {
    console.log(res)
})

.catch((err) => {
    console.log(err)
})



Delete

User.deleteOne({name: "sameer"})
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})


User.findByIdAndDelete({_id: "65210cbca18efbb433de85c3"})
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})


User.findByIdAndDelete({_id: "65210cbca18efbb433de85c3"})
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})




// Schema Validation (books.js)

