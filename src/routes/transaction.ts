import express from "express";
import { TransactionModel } from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const transactions = await TransactionModel.find()
      .limit(50)
      .sort({ createdOn: -1 });
    res.status(200).json(transactions);
  } catch (error: any) {
    res.status(404).json({ msg: error.message });
  }
});

export default router;
