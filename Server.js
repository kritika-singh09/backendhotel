
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config(); // <-- keep it simple

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
