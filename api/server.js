import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
import morgan from "morgan";
import cors from "cors";
import { mongoConnect } from "./src/config/mongoConfig.js";
mongoConnect();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// api
import adminRouter from "./src/router/adminRouter.js";
import categoryRouter from "./src/router/categoryRouter.js";
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/category", categoryRouter);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Server is live",
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  const code = error.statusCode || 500;
  res.status(code).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:8000`);
});
