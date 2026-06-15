import express from "express";
import {
  createProject,
  getProjects,
  updateProject,
  getSingleProject,
  deleteProject,
} from "../controllers/project.controller";

const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getSingleProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
