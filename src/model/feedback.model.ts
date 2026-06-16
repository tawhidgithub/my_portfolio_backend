import mongoose, { Document, Schema } from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);
