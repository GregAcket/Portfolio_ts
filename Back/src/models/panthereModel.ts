import mongoose from "mongoose"

const { Schema } = mongoose

type PantherePictureType = {
  id: number
  url: string
  text: string
  alt: string
  h3: string
  p: string
}

const panthereModel = new Schema<PantherePictureType>({
  id: { type: Number, required: true },
  url: { type: String, required: true },
  text: { type: String, required: true },
  alt: { type: String, required: true },
  h3: { type: String, required: true },
  p: { type: String, required: true },
})

export const pantherePicture = mongoose.model<PantherePictureType>(
  "panthere",
  panthereModel
)
