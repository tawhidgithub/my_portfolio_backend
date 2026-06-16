import mongoose, { Document, Schema } from "mongoose";
import { trim } from "zod";

const skillsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    experience: { type: Number, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const Skills = mongoose.model("Skills", skillsSchema);
