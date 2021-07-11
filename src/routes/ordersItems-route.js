import ordersItemsController from "../controllers/ordersItems-controller";
import express from "express";

const router = express.Router();

app.use("/", (req, res, next) => next());

router.get("/", ordersItemsController.getOrdersItems);
router.post("/add", ordersItemsController.addOrdersItems);
router.put("/update", ordersItemsController.updateOrdersItemsById);
router.delete("/delete", ordersItemsController.deleteOrdersItemsById);

module.exports = router;
