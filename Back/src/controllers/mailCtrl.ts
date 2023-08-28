import { Request, Response } from "express"
import nodemailer from "nodemailer"

export const sendMail = (req: Request, res: Response) => {
  const { name, email, message } = req.body

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.SENDER}`,
      pass: `${process.env.PASSMAIL}`,
    },
  })

  const msg = {
    from: `${name.value} ${email.value}`,
    to: `${process.env.SENDER}`,
    subject: `Contacter ${name.value} à l'adresse ${email.value}`,
    text: `${message.value}`,
  }

  transporter.sendMail(msg)

  res
    .status(200)
    .json("Votre message à bien été envoyé.\n\nMerci !\n\nÀ bientôt. ")
}
