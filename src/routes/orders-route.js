import ordersController from "../controllers/orders-controller";
import express from "express";

const router = express.Router();

router.use("/", (req, res, next) => next());

router.get("/", ordersController.getOrders);
router.post("/add", ordersController.addOrders);
router.put("/update", ordersController.updateOrderById);
router.delete("/delete", ordersController.deleteOrderById);

module.exports = router;
