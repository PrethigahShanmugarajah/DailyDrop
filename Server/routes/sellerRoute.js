// Server/routes/sellerRoute.js
import express from "express";
import { isSellerAuth, sellerLogin } from "../controllers/sellerController.js";
import { authSeller } from "../middlewares/authSeller.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", authSeller, isSellerAuth);

export default sellerRouter;
