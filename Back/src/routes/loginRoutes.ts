import express from "express"
import { login } from "../controllers/loginCtrl.js"
// signup

export const loginRoutes = express.Router()

// loginRoutes.post("/", signup)
loginRoutes.post("/", login)
