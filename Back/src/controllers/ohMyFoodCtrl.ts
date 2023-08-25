import { Request, Response } from "express"
import { OhmyfoodModel } from "../models/ohmyfoodModel.js"
import { ReqRes } from "../utils/type.js"

export const ohMyFoodAll = async (req: Request, res: Response) => {
  await OhmyfoodModel.find()
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

export const ohMyFoodRestau = async (req: Request, res: Response) => {
  await OhmyfoodModel.findOne({ name: req.params.name })
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
