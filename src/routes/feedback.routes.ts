import express from "express";
import {
  createFeedback,
  deleteFeedback,
  getFeedback,
  updateFeedback,
} from "../controllers/feedback.controller";

const router = express.Router();

router.post("/", createFeedback);
router.get("/", getFeedback);
router.put("/:id", updateFeedback);
router.delete("/:id", deleteFeedback);

export default router;
