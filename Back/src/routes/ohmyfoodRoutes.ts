import express from "express"
import { ohMyFoodAll, ohMyFoodRestau } from "../controllers/ohMyFoodCtrl.js"

export const ohmyfoodRoutes = express.Router()

ohmyfoodRoutes.get("/", ohMyFoodAll)
ohmyfoodRoutes.get("/:name", ohMyFoodRestau)
