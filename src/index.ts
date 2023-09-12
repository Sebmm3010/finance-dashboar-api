import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import kpiroutes from "./routes/kpi";
// import { Kpi } from "./models";
// import { kpis } from "./data";

/* Configuracion */
dotenv.config();
const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* Rutas */
app.use("/kpis", kpiroutes);

/* Mongoose */
const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));

    /* Seed */
    // await mongoose.connection.db.dropDatabase();
    // Kpi.insertMany(kpis);
  })
  .catch((err) => console.log(`${err} sin conexion`));
