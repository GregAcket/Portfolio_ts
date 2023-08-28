import express from "express"
import { allProjects } from "../controllers/projectCtrl.js"

export const projectRoutes = express.Router()

projectRoutes.get("/", allProjects)
