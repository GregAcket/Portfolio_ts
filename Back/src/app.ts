import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import cors from "cors"

dotenv.config()

import { bookiRoute } from "./routes/bookiRoutes.js"
import { ohmyfoodRoutes } from "./routes/ohmyfoodRoutes.js"
import { kanapRoutes } from "./routes/kanapRoutes.js"
import { panthereRoutes } from "./routes/panthereRoutes.js"
import { kasaRoutes } from "./routes/kasaRoutes.js"
import { projectRoutes } from "./routes/projectRoutes.js"
import { mailRoutes } from "./routes/mailRoutes.js"
// import { loginRoutes } from "./routes/loginRoutes.js"
// import { dashboardRoutes } from "./routes/dashboardRoutes.js"

import path from "path"

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})

const __dirname = path.dirname(import.meta.url)

export const app = express()

mongoose
  .connect(`${process.env.DATABASE}`)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"))

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  )
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  )
  res.setHeader("Cache-Control", "public,max-age=3600")
  next()
})

app.use(
  helmet.permittedCrossDomainPolicies({
    permittedPolicies: "all",
  })
)
app.use(limiter)
app.use("/images", express.static(path.join(__dirname, "/images")))

app.use("/projects", projectRoutes)

app.use("/booki", bookiRoute)
app.use("/ohmyfood", ohmyfoodRoutes)
app.use("/kanap", kanapRoutes)
app.use("/panthere", panthereRoutes)
app.use("/kasa", kasaRoutes)

app.use("/contact", mailRoutes)

//app.use("/login", loginRoutes)
// app.use("/signup", loginRoutes)
//app.use("/dashboard", dashboardRoutes)
