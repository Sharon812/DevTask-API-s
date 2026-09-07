import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", taskRoutes);

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
