import { Request, Response } from "express"
import { OhmyfoodModel } from "../models/ohmyfoodModel.js"

export const ohMyFoodAll = async (req: Request, res: Response) => {
  await OhmyfoodModel.find()
    .then((products) => {
      res.status(200).json(products)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}

export const ohMyFoodRestau = async (req: Request, res: Response) => {
  await OhmyfoodModel.findOne({ name: req.params.name })
    .then((product) => {
      if (!product) {
        return res.status(404).json("Il n'y a aucun produit correspondant")
      }

      res.status(200).json(product)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}
