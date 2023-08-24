import express from "express"
import { allBookiCards } from "../controllers/bookiCtrl.js"

export const bookiRoute = express.Router()

bookiRoute.get("/", allBookiCards)
