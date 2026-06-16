import { asyncHandler } from "../utils/asyncHandler";
import { Response, Request } from "express";
import { sendResponse } from "../utils/response";
import { MESSAGES } from "../constants/message";
import { Experience } from "../model/exp.model";

export const createExperience = asyncHandler(
  async (req: Request, res: Response) => {
    const experience = await Experience.create(req.body);

    return sendResponse(res, {
      success: true,
      data: experience,
      message: MESSAGES.EXPERIENCE.CREATE_SUCCESS,
    });
  },
);

export const getExperience = asyncHandler(
  async (req: Request, res: Response) => {
    const experience = await Experience.find().sort({ createdAt: -1 });
    return sendResponse(res, {
      success: true,
      data: experience,
      message: MESSAGES.EXPERIENCE.GET_LIST,
    });
  },
);

export const updateExperience = asyncHandler(
  async (req: Request, res: Response) => {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );

    return sendResponse(res, {
      data: experience,
      message: MESSAGES.EXPERIENCE.UPDATE_SUCCESS,
    });
  },
);

export const deleteExperience = asyncHandler(
  async (req: Request, res: Response) => {
    const experience = Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return sendResponse(res, {
        statusCode: 404,
        message: MESSAGES.EXPERIENCE.NOT_FOUND,
      });
    }
    sendResponse(res, {
      message: MESSAGES.EXPERIENCE.DELETE_SUCCESS,
      data: Experience,
    });
  },
);
