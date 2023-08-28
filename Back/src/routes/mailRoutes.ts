import express from "express"
import { sendMail } from "../controllers/mailCtrl.js"

export const mailRoutes = express.Router()

mailRoutes.post("/", sendMail)
