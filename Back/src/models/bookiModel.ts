import mongoose from "mongoose"

const { Schema } = mongoose

type Booki = {
  urlPicture: string
  alt: string
  name: string
  price?: string
  stars?: string
}

const pictureModel = new Schema<Booki>({
  urlPicture: { type: String, required: true },
  alt: { type: String, required: true },
  name: { type: String, required: true },
  price: String,
  stars: String,
})

export const BookiPicture = mongoose.model<Booki>("Bookipicture", pictureModel)
