import orderModel from "../models/orders-model";

exports.getOrders = async (req, res, next) => {};

exports.addOrders = async (req, res, next) => {};

exports.updateOrderById = async (req, res, next) => {};

exports.deleteOrderById = async (req, res, next) => {};

const handleError = (error, res) => {
  res.json({ success: false, message: error.message });
};
