import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/loginModel.js"
import { Request, Response } from "express"

// export const signup = (req: Request, res: Response) => {
//   bcrypt
//     .hash(req.body.password, 10)
//     .then((hash) => {
//       const user = new User({
//         name: req.body.name,
//         password: hash,
//       })
//       user
//         .save()
//         .then(() => res.status(200).json("Votre compte à bien été créé"))
//         .catch((error) => res.status(400).json(error))
//     })
//     .catch((error) => res.status(500).json(error))
// }

export const login = (req: Request, res: Response) => {
  User.findOne({ name: req.body.name })
    .then((user) => {
      if (user === null) {
        res.status(401).json("Identifiant ou mot de passe incorrect")
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res.status(401).json("Identifiant ou mot de passe incorrect")
            } else {
              if (process.env.TOKEN) {
                res.status(200).json({
                  userId: user._id,
                  token: jwt.sign({ userId: user._id }, process.env.TOKEN, {
                    expiresIn: "24h",
                  }),
                })
              }
            }
          })
          .catch((error) => res.status(500).json(error))
      }
    })
    .catch((error) => res.status(500).json(error))
}
