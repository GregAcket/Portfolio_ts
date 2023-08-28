import { Request, Response } from "express"
import { Project } from "../models/projectModel.js"

export const allProjects = async (req: Request, res: Response) => {
  await Project.find()
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(400).json(error))
}
