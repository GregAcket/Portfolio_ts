import express from "express"
import { kasaAll, oneKasa } from "../controllers/kasaCtrls.js"

export const kasaRoutes = express.Router()

kasaRoutes.get("/", kasaAll)
kasaRoutes.get("/:id", oneKasa)
