// Server/controllers/productController.js
import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product";

/* -------- ADD PRODUCT -------- */
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);

    const images = req.files;

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    await Product.create({ ...productData, image: imagesUrl });

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      productData,
    });
  } catch (error) {
    console.error("Add Product Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Add Product Error: ${error.message}`,
    });
  }
};
