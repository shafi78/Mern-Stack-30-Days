// One to Squillions implementations MongoDB


const mongoose = require('mongoose');
const {Schema} = mongoose ;

main().
then(() => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    contents: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);


// Adding first user data with a post

const addData = async() => {
    let user1 = new User({
        username: "Yusuf",
        email: "yusuf@gmail.com",
    })

    let post1 = new Post({
        content: "Hello world!",
        likes: 7
    })

    post1.user = user1 ;

   await user1.save()
   await post1.save()
}



// Adding new data with same userid ("Yusuf") and new post

const secondData = async() => {
    let user = await User.findOne({username: "Yusuf"});

    let post2 = new Post({
        content: "Bye Bye!",
        likes: 25
    })

    post2.user = user ;

   await post2.save()
}

secondData();