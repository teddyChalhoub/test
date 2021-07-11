import mongoose from "mongoose";

const orders = mongoose.Schema({
    user_id:[{
        type : mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    orderItem_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ordersItem"
    }
})

module.exports = mongoose.model("order",orders);