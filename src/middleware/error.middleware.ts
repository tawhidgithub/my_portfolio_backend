import { Request, Response, NextFunction } from "express";
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = err.message || "Internal Server Error";
  if (err.name === "ValidationError") {
    statusCode = 400;
    const errors = Object.values(err.errors).map((error: any) => error.message);
    return res.status(statusCode).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};
