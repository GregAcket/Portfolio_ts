import { Request, Response } from "express"
import { BookiPicture } from "../models/bookiModel.js"
import { ReqRes } from "../utils/type.js"

export const allBookiCards = async ({ req, res }: ReqRes) => {
  await BookiPicture.find()
    .then((pictures) => res.status(200).json(pictures))
    .catch((error) => res.status(400).json(error))
}
