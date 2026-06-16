import {
  createSkills,
  deleteSkills,
  getSkills,
  updateSkills,
} from "../controllers/skills.controller";
import express from "express";

const router = express.Router();

router.post("/", createSkills);
router.get("/", getSkills);
router.put("/:id", updateSkills);
router.delete("/:id", deleteSkills);

export default router;
