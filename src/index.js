import express from "express";
import cors from "cors";
import photos from "./routes/photos-route";
import products from "./routes/Product-route";
import orders from "./routes/orders-route";
import DBConnection from "./db";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use("/photos", photos);
app.use("/products", products);
app.use("/orders",orders)

const database = async () => {
  await DBConnection();
  app.listen(port, () =>
    console.log(`the app is listening at port  http://localhost:${port}/`)
  );
};

database();
