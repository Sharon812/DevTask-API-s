import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT, "0.0.0.0", () => {
      console.log(` Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
