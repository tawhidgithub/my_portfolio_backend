import express from "express";
import { createYoutube, getYoutube } from "../controllers/youtube.controller";

const router = express.Router();

router.post("/", createYoutube);
router.get("/", getYoutube);
// router.put("/:id", updateSkills);
// router.delete("/:id", deleteSkills);

export default router;
