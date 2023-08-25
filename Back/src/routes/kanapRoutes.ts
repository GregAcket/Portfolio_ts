import express from "express"
import { kanapAll, oneKanap } from "../controllers/kanapCtrl.js"

export const kanapRoutes = express.Router()

kanapRoutes.get("/", kanapAll)
kanapRoutes.get("/:id", oneKanap)
