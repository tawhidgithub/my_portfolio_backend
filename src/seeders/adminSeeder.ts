import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "../model/Admin.model";
import dotenv from "dotenv";

dotenv.config();

const seedAdmin = async () => {
  try {
    // connect DB
    await mongoose.connect(process.env.MONGO_URI as string);

    console.log("MongoDB Connected");

    // check if admin already exists
    const existingAdmin = await Admin.findOne({
      email: "titawhid02@gmail.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    // hash password
    const hashedPassword = await bcrypt.hash("12345678", 10);

    // create admin
    await Admin.create({
      email: "titawhid02@gmail.com",
      password: hashedPassword,
    });

    console.log("Admin created successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seeder error:", error);
    process.exit(1);
  }
};

seedAdmin();
