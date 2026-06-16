import { Response } from "express";

export interface ApiResponse<T> {
  success?: boolean;
  statusCode?: number;
  message?: string;
  data?: T | null;
}
export const sendResponse = <T>(
  res: Response,
  {
    success = true,
    statusCode = 200,
    message = "",
    data = null,
  }: ApiResponse<T>,
) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
  });
};
