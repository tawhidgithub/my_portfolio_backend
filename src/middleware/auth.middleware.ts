import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const protect = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string;
      };

      req.admin = decoded.id;

      next();
    } catch (error) {
      res.status(401).json({
        message: "Not authorized",
      });
    }
  } else {
    res.status(401).json({
      message: "No token",
    });
  }
};

export default protect;
