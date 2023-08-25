import express from "express"
import { panthereAll } from "../controllers/panthereCtrl.js"

export const panthereRoutes = express.Router()

panthereRoutes.get("/", panthereAll)
