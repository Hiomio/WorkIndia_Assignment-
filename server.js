import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import apiKeyMiddleware from "./middlewares/apiKeyMiddleware.js";
import authMiddleware from "./middlewares/authMiddleware.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests
app.use(apiKeyMiddleware);

// Routes
app.use("/admin", authMiddleware, adminRoutes); // Protect admin routes with authMiddleware
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
