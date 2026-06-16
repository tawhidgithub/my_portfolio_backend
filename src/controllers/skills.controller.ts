import { Skills } from "../model/skills.model";
import { asyncHandler } from "../utils/asyncHandler";
import { Response, Request } from "express";
import { sendResponse } from "../utils/response";
import { MESSAGES } from "../constants/message";

// export const updateSkills = asyncHandler(
//   async (req: Request, res: Response) => {},
// );

export const createSkills = asyncHandler(
  async (req: Request, res: Response) => {
    const skills = await Skills.create(req.body);

    return res.status(200).json({
      success: true,
      data: skills,
    });
  },
);

export const getSkills = asyncHandler(async (req: Request, res: Response) => {
  const skills = await Skills.find().sort({ createdAt: -1 });
  return res.status(200).json({
    success: true,
    data: skills,
    message: "get all the Skills data",
  });
});

export const updateSkills = asyncHandler(
  async (req: Request, res: Response) => {
    const skills = await Skills.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return sendResponse(res, {
      data: skills,
      message: MESSAGES.SKILLS.UPDATE_SUCCESS,
    });
  },
);

export const deleteSkills = asyncHandler(
  async (req: Request, res: Response) => {
    const skills = Skills.findByIdAndDelete(req.params.id);

    if (!skills) {
      return sendResponse(res, {
        statusCode: 404,
        message: MESSAGES.SKILLS.SKILLS_NOT_FOUND,
      });
    }
    sendResponse(res, {
      message: MESSAGES.SKILLS.DELETE_SUCCESS,
      data: Skills,
    });
  },
);
