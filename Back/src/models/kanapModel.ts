import mongoose from "mongoose"

const { Schema } = mongoose

type Kanap = {
  id: string
  colors: string[]
  name: string
  price: number
  imageUrl: string
  descritpion: string
  altTxt: string
}

const kanapeModel = new Schema<Kanap>({
  id: { type: String, required: true },
  colors: [{ type: String, required: true }],
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  descritpion: { type: String, required: true },
  altTxt: { type: String, required: true },
})

export const KanapModel = mongoose.model<Kanap>("Kanap", kanapeModel)
