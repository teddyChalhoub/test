import mongoose from "mongoose";

const ordersItems = mongoose.Schema({
  order_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  ],
  product_Id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  quantity: { type: Number },
});

module.exports = mongoose.model("ordersItem", ordersItems);
