// Server/routes/productRoute.js
import express from "express";
import { upload } from "../config/multer.js";
import { authSeller } from "../middlewares/authSeller.js";
import { addProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add", upload.array([images]), authSeller, addProduct);

export default productRouter;
