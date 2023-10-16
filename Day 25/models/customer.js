// One to many implementations MongoDB


const mongoose = require('mongoose');
const {Schema} = mongoose ;

main().
then(() => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const orderSchema = new Schema({
    item: String,
    price: Number,
});


const Order = mongoose.model("Order",orderSchema);

const addOrders = async() => {
    let res = await Order.insertMany([
        {item: "Samosa",price: 15},
        {item: "Chips",price:10},
        {item: "Chocalate",price:40}
            ]
        )

    console.log(res);
}

addOrders();



const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

const Customer = mongoose.model("Customer",customerSchema);


const addCustomer = async() => {
    let cust1 = new Customer({
        name: "sameer",
    })

    let order1 = await Order.findOne({item: "Chips"});
    let order2 = await Order.findOne({item: "Chocalate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let res = await cust1.save();
    console.log(res);

}

addCustomer();




// Using populate

const findCustomer = async() => {
    let result = await Customer.find({}).populate("orders");
    console.log(result);
}

findCustomer();