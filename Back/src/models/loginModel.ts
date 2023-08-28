import mongoose from "mongoose"

const { Schema } = mongoose

type Login = {
  name: string
  password: string
}

const userModel = new Schema<Login>({
  name: { type: String, required: true },
  password: { type: String, required: true },
})

export const User = mongoose.model("user", userModel)
