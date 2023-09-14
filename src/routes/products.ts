import express from "express";
import { ProductModel } from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(404).json({ msg: error.message });
  }
});

export default router;
