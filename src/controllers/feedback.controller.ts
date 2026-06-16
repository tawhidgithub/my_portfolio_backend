import { Youtube } from "../model/youtube.model";
import { asyncHandler } from "../utils/asyncHandler";
import { Response, Request } from "express";
import { sendResponse } from "../utils/response";
import { MESSAGES } from "../constants/message";
import { Feedback } from "../model/feedback.model";

export const createFeedback = asyncHandler(
  async (req: Request, res: Response) => {
    const feedback = await Feedback.create(req.body);

    sendResponse(res, {
      message: MESSAGES.FEEDBACK.CREATE_SUCCESS,
      data: feedback,
    });
  },
);

export const getFeedback = asyncHandler(async (req: Request, res: Response) => {
  const feedback = await Feedback.find().sort({ createdAt: -1 });
  return sendResponse(res, {
    message: MESSAGES.FEEDBACK.GET_LIST,
    data: feedback,
  });
});

export const updateFeedback = asyncHandler(
  async (req: Request, res: Response) => {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return sendResponse(res, {
      data: feedback,
      message: MESSAGES.FEEDBACK.UPDATE_SUCCESS,
    });
  },
);

export const deleteFeedback = asyncHandler(
  async (req: Request, res: Response) => {
    const feedback = Feedback.findByIdAndDelete(req.params.id);

    if (!feedback) {
      return sendResponse(res, {
        statusCode: 404,
        message: MESSAGES.FEEDBACK.NOT_FOUND,
      });
    }
    sendResponse(res, {
      message: MESSAGES.FEEDBACK.DELETE_SUCCESS,
      data: feedback,
    });
  },
);
