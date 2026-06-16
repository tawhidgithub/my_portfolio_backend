import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    console.log("MongoDB Connected");
    console.log("MongoDB Connected---------", process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
