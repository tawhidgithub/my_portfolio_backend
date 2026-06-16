import { Youtube } from "../model/youtube.model";
import { asyncHandler } from "../utils/asyncHandler";
import { Response, Request } from "express";
import { sendResponse } from "../utils/response";
import { MESSAGES } from "../constants/message";

export const createYoutube = asyncHandler(
  async (req: Request, res: Response) => {
    const youtube = await Youtube.create(req.body);

    sendResponse(res, {
      message: MESSAGES.YOUTUBE.CREATE_SUCCESS,
      data: youtube,
    });
  },
);

export const getYoutube = asyncHandler(async (req: Request, res: Response) => {
  const youtube = await Youtube.find().sort({ createdAt: -1 });
  return sendResponse(res, {
    message: MESSAGES.YOUTUBE.GET_LIST,
    data: youtube,
  });
});

export const updateYoutube = asyncHandler(
  async (req: Request, res: Response) => {
    const youtube = await Youtube.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return sendResponse(res, {
      data: youtube,
      message: MESSAGES.YOUTUBE.UPDATE_SUCCESS,
    });
  },
);

export const deleteYoutube = asyncHandler(
  async (req: Request, res: Response) => {
    const youtube = Youtube.findByIdAndDelete(req.params.id);

    if (!youtube) {
      return sendResponse(res, {
        statusCode: 404,
        message: MESSAGES.YOUTUBE.NOT_FOUND,
      });
    }
    sendResponse(res, {
      message: MESSAGES.YOUTUBE.DELETE_SUCCESS,
      data: youtube,
    });
  },
);
