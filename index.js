import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import SubCategoryRoute from "./routes/SubCategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

// environment variable
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

//mongodb connection
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.v44gp4t.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT} `)
    )
  )
  .catch((error) => console.log(error));

//routes
app.use("/api", UserRoute);
app.use("/api", CategoryRoute);
app.use("/api", SubCategoryRoute);
app.use("/api", ProductRoute);
