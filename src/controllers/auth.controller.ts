import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import Admin from "../model/Admin.model";
import generateToken from "../utils/generateToken";

export const loginAdmin = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    res.status(401).json({
      message: "Invalid credentials",
    });

    return;
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    res.status(401).json({
      message: "Invalid credentials",
    });

    return;
  }

  const token = generateToken(admin._id.toString());

  res.status(200).json({
    token,
    admin,
  });
};
