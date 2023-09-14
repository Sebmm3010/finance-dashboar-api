import mongoose, { Model, Schema, model } from "mongoose";
import { loadType } from "mongoose-currency";
import { IProduct } from "../interfaces";

loadType(mongoose);

const ProductSchema = new Schema(
  {
    price: {
      // @ts-ignore
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    expenses: {
      // @ts-ignore
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", ProductSchema);

export default Product;
