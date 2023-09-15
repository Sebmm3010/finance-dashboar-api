import mongoose, { Model, Schema, model } from "mongoose";
import { loadType } from "mongoose-currency";
import { ITransaction } from "../interfaces";

loadType(mongoose);

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String
    },
    amount: {
      // @ts-ignore
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction: Model<ITransaction> =
  mongoose.models.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
