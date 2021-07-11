import photoModel from "../models/photos-model";
import productSchema from "../models/Products-model";
import fs from "fs/promises";

exports.getPhotos = async (req, res, next) => {
  try {
    const photos = await photoModel.find().populate("product");
    if (photos.length === 0) throw new Error("No Photos has been found ");

    res.json({
      success: true,
      message: "Photos has been successfully fetched",
      data: photos,
    });
  } catch (err) {
    handleError(err, res);
  }
};

exports.addPhotos = async (req, res, next) => {
  try {
    if (req.files) {
      const photos = [];
      req.files.map((photo) => {
        photos.push({
          name: photo.originalname.replace(/\.(png|jpg|jpeg|gif)$/, ""),
          url: photo.path.replace(/public/, ""),
          product: req.query.product_id,
        });
      });

      const data = await photoModel.insertMany(photos);
      if (data.length === 0) throw new Error("Photos hasn't been saved");

      const product = await productSchema.findById({
        _id: req.query.product_id,
      });

      const push = [];

      data.map((image) => {
        push.push(image._id);
      });

      product.images.push({ $each: push });

      await product.save();

      res.json({
        success: true,
        message: "Photos has been successfully saved",
      });
    } else {
      throw new Error("No photo's has been detected");
    }
  } catch (err) {
    handleError(err, res);
  }
};

exports.deletePhotoById = async (req, res, next) => {
  try {
    const photo = await photoModel.findById({ _id: req.params.id });
    if (!photo) throw new Error("Photo doesn't exist");

    await fs.unlink(`public${photo.url}`);

    const product = await productSchema.findById({ _id: photo.product });

    product.images.pull(photo._id);

    await product.save();

    const deleted = await photoModel.deleteOne({ _id: photo._id });
    if (!deleted.ok) throw new Error("Photo hasn't been deleted");

    res.json({ success: true, message: "Photo has been successfully deleted" });
  } catch (err) {
    handleError(err, res);
  }
};

const handleError = (error, res) => {
  res.json({ success: false, message: error.message });
};
