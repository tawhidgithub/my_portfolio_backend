import mongoose, { Document, Schema } from "mongoose";
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, trim: true },
    description: { type: String, require: true, trim: true },
    techStack: { type: String, require: true, trim: true },
    githubUrl: String,
    liveUrl: String,
    image: String,
  },
  {
    timestamps: true,
  },
);

export const Project = mongoose.model("Project", projectSchema);
