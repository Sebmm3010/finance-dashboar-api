import express from "express";
import mongoose from "mongoose";
import { kpis, products, transactions } from "../data";
import { KpiModel, ProductModel, TransactionModel } from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await mongoose.connection.db.dropDatabase();
    KpiModel.insertMany(kpis);
    ProductModel.insertMany(products);
    TransactionModel.insertMany(transactions);
    res.status(200).json({ msg: "ok" });
  } catch (error: any) {
    res.status(404).json({ msg: error.message });
  }
});

export default router;
