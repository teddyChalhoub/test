import ordersItemsModel from "../models/ordersItems-model";

exports.getOrdersItems = async (req, res, next) => {};

exports.addOrdersItems = async (req, res, next) => {};

exports.updateOrdersItemsById = async (req, res, next) => {};

exports.deleteOrdersItemsById = async (req, res, next) => {};

const handleError = (error, res) => {
  res.json({ success: false, message: error.message });
};
