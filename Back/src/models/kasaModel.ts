import mongoose from "mongoose"

const { Schema } = mongoose

type Kasa = {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

const kasaModel = new Schema<Kasa>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  cover: { type: String, required: true },
  pictures: [{ type: String, required: true }],
  description: { type: String, required: true },
  host: {
    name: { type: String, required: true },
    picture: { type: String, required: true },
  },
  rating: { type: String, required: true },
  location: { type: String, required: true },
  equipments: [{ type: String, required: true }],
  tags: [{ type: String, required: true }],
})

export const KasaModel = mongoose.model<Kasa>("Kasa", kasaModel)
