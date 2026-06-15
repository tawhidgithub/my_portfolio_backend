import { Response, Request } from "express";
import { Project } from "../model/project.model";
import { asyncHandler } from "../utils/asyncHandler";
/// create Project
export const createProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.create(req.body);

    res.status(200).json({
      success: true,
      data: project,
    });
  },
);

/// get Project

export const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const project = await Project.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    data: project,
  });
});

// GET SINGLE
export const getSingleProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({
      success: true,
      data: project,
    });
  },
);

// UPDATE
export const updateProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({
      success: true,
      data: project,
    });
  },
);

// DELETE
export const deleteProject = asyncHandler(
  async (req: Request, res: Response) => {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.json({
      success: true,
      message: "Project deleted successfully",
    });
  },
);
