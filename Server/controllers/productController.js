// Server/controllers/productController.js
import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js";

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

/* -------- GET PRODUCT -------- */
export const productList = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Get Product Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Get Product Error: ${error.message}`,
    });
  }
};

/* -------- GET SINGLE PRODUCT[ID] -------- */
export const productById = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Get Single Product Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Get Single Product Error: ${error.message}`,
    });
  }
};

/* -------- CHANGE PRODUCT INSTOCK -------- */
// export const changeStock = async (req, res) => {
//   try {
//     const { id, inStock } = req.body;
//     await Product.findByIdAndUpdate(id, { inStock });
//     res.json({ success: true, message: "Stock Updated" });
//   } catch (error) {
//     console.error("Change Product inStock Error:", error.message);

//     return res.status(500).json({
//       success: false,
//       message: `Change Product inStock Error: ${error.message}`,
//     });
//   }
// };

/* -------- CHANGE PRODUCT INSTOCK -------- */
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      { inStock },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Stock updated successfully",
      product,
    });
  } catch (error) {
    console.error("Change Product inStock Error:", error.message);

    return res.status(500).json({
      success: false,
      message: `Change Product inStock Error: ${error.message}`,
    });
  }
};
