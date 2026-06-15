import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/project.routes";
import authRoutes from "./routes/auth.routes";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

export default app;
