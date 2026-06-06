import mongoose, { Document } from "mongoose";

export interface IAdmin extends Document {
  email: string;
  password: string;
}

const adminSchema = new mongoose.Schema<IAdmin>(
  {
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IAdmin>("Admin", adminSchema);
