// One to few implementations MongoDB


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
    addresses: [
        {
            _id : false,
            location: String,
            city: String,
        }
    ]
});

const User = mongoose.model("User",userSchema);


const addUsers = async() => {
    let user1 = new User({
        username: "Shafi",
        addresses: [
            {
                location: "Madihal , Dahrwad",
                city: "Dharwad"
            }
        ]
    })
    user1.addresses.push({location: "Saundatti",city: "Belgaum"})
    let result = await user1.save();
    console.log(result);
}

addUsers();