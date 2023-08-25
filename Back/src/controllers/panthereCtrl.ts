import { Request, Response } from "express"
import { pantherePicture } from "../models/panthereModel.js"

export const panthereAll = async (req: Request, res: Response) => {
  await pantherePicture
    .find()
    .then((pictures) => res.status(200).json(pictures))
    .catch((error) => res.status(400).json(error))
}
