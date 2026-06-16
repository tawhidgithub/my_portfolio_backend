import mongoose, { Document, Schema } from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    tack_Stack: { type: [String], required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const Experience = mongoose.model("experience", experienceSchema);
