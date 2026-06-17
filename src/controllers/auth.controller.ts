import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import Admin from "../model/Admin.model";
import generateToken from "../utils/generateToken";
import { sendResponse } from "../utils/response";
import { MESSAGES } from "../constants/message";

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

  sendResponse(res, {
    statusCode: 200,
    message: MESSAGES.LOGIN.SUCCESS,
    data: {
      accessToken: token,
      user: admin,
    },
  });
};
