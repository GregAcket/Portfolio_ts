import { Request, Response } from "express"
import { KanapModel } from "../models/kanapModel.js"

export const kanapAll = async (req: Request, res: Response) => {
  await KanapModel.find()
    .then((kanaps) => {
      res.status(200).json(kanaps)
    })

    .catch(() => {
      res
        .status(500)
        .send(
          new Error(
            "Désolé, il y  a eu  un problème interne au serveur.\n\nVeuillez réesayer plus tard."
          )
        )
    })
}

export const oneKanap = async (req: Request, res: Response) => {
  await KanapModel.findOne({ id: req.params.id })
    .then((kanap) => {
      console.log(kanap)
      if (!kanap) {
        return res
          .status(404)
          .send(new Error("Il n'y a aucun produit correspondant"))
      }
      res.status(200).json(kanap)
    })
    .catch((error) => {
      res
        .status(400)
        .send(
          new Error(
            "Désolé, il y  a eu  un problème interne au serveur.\n\nVeuillez réesayer plus tard."
          )
        )
    })
}
