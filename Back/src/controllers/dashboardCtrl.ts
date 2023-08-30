import { Request, Response } from "express"
import { Project } from "../models/projectModel.js"
import fs from "fs"

export const createProject = async (req: Request, res: Response) => {
  const project = { ...req.body }
  const newProject = new Project({ ...project })

  newProject
    .save()
    .then(() => {
      res.status(201).json("Le nouveau projet à bien été créé")
    })
    .catch((error) => res.status(400).json(error))
}

export const oneProject = async (req: Request, res: Response) => {
  Project.findOne({ name: req.params.name })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(400).json(error))
}

export const modifyProject = async (req: Request, res: Response) => {
  const modifiedProject = { ...req.body }

  Project.findOne({ name: req.params.name })
    .then((project) => {
      if (project?.urlScreenshot) {
        fs.unlink(project?.urlScreenshot, () => {
          Project.updateOne({ name: req.params.name }, { ...modifiedProject })
            .then(() => res.status(200).json("Le projet à été modifié"))
            .catch((error) => res.status(400).json(error))
        })
      }
    })
    .catch((error) => res.status(400).json(error))
}

export const deleteProject = async (req: Request, res: Response) => {
  Project.findOne({ name: req.params.name })
    .then((project) => {
      if (project?.urlScreenshot) {
        fs.unlink(project.urlScreenshot, () => {
          project
            .deleteOne({ name: req.params.name })
            .then(() => res.status(200).json("Le projet à été supprimé"))
            .catch((error) => res.status(400).json(error))
        })
      }
    })
    .catch((error) => res.status(400).json(error))
}
