// Server/routes/sellerRoute.js
import express from "express";
import { sellerLogin } from "../controllers/sellerController.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);

export default sellerRouter;
