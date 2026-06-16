import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/project.routes";
import skillsRoutes from "./routes/skills.routes";
import youtubeRoute from "./routes/youtube.route";
import experienceRoutes from "./routes/exp.routes";
import feedbackRoutes from "./routes/feedback.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
dotenv.config();
/// middleware
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/youtube", youtubeRoute);
app.use("/api/experiences", experienceRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);
export default app;
