import mongoose, { Document, Schema } from "mongoose";

const youtubeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    video_url: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const Youtube = mongoose.model("youtube", youtubeSchema);
