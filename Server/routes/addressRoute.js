// Server/routes/addressRoute.js
import express from "express";
import { authUser } from "../middlewares/authUser.js";
import { addAddress } from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter.post("/add", authUser, addAddress);

export default addressRouter;
