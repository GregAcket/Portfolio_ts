import express from "express"
import {
  createProject,
  modifyProject,
  oneProject,
  deleteProject,
} from "../controllers/dashboardCtrl.js"
import { auth } from "../middleware/auth.js"

export const dashboardRoutes = express.Router()

dashboardRoutes.post("/", auth, createProject)
dashboardRoutes.get("/:name", auth, oneProject)
dashboardRoutes.put("/:name", auth, modifyProject)
dashboardRoutes.delete("/:name", auth, deleteProject)
