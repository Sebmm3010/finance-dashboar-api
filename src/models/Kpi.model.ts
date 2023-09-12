import mongoose, { Model, Schema, model } from "mongoose";
import { loadType } from "mongoose-currency";
import { IKpi } from "../interfaces";

loadType(mongoose);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
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
    operationalExpenses: {
      // @ts-ignore
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    nonOperationalExpenses: {
      // @ts-ignore
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const dailySchema = new Schema(
  {
    date: String,
    revenue: {
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
  },
  { toJSON: { getters: true } }
);

const KpiSchema = new Schema(
  {
    totalProfit: {
      // @ts-ignore
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    totalRevenue: {
      // @ts-ignore
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    totalExpenses: {
      // @ts-ignore
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v: any) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      currency: "USD",
      of: {
        // @ts-ignore
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v: any) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [dailySchema],
  },
  { toJSON: { getters: true }, timestamps: true }
);

const Kpi: Model<IKpi> = mongoose.models.Kpi || model("Kpi", KpiSchema);

export default Kpi;
