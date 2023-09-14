import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import { kpiRoutes, productRoutes, seedRoutes } from "./routes";

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
app.use("/kpis", kpiRoutes);
app.use("/products", productRoutes);
if (process.env.ENVIROMENT === "dev") {
  app.use("/seed", seedRoutes);
}

/* Mongoose */
const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(async () => {
    app.listen(PORT, () =>
      console.log(`Server corriendo en puerto ${PORT}`)
    );
  })
  .catch((err) => console.log(`${err} sin conexion`));
