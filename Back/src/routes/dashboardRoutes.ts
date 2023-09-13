import express from "express"
import { upload } from "../middleware/multer-config.js"
import {
  createProject,
  modifyProject,
  oneProject,
  deleteProject,
} from "../controllers/dashboardCtrl.js"
import { auth } from "../middleware/auth.js"

export const dashboardRoutes = express.Router()

dashboardRoutes.post("/", auth, upload, createProject)
dashboardRoutes.get("/:name", auth, oneProject)
dashboardRoutes.put("/:name", auth, upload, modifyProject)
dashboardRoutes.delete("/:name", auth, deleteProject)
