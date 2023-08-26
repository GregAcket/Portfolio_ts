import { Request, Response } from "express"
import { KasaModel } from "../models/kasaModel.js"

export const kasaAll = async (req: Request, res: Response) => {
  await KasaModel.find()
    .then((products) => {
      res.status(200).json(products)
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

export const oneKasa = async (req: Request, res: Response) => {
  await KasaModel.findOne({ id: req.params.id })
    .then((product) => {
      if (!product) {
        return res
          .status(404)
          .send(new Error("Il n'y a aucun produit correspondant"))
      }

      res.status(200).json(product)
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
