import mongoose from "mongoose"

const { Schema } = mongoose

type Ohmyfood = {
  id: number
  name: string
  image: string
  place: string
  nouveau: boolean
  entree: [
    {
      principal: string
      accompagnement: string
      prix: string
    }
  ]
  plat: [
    {
      principal: string
      accompagnement: string
      prix: string
    }
  ]
  dessert: [
    {
      principal: string
      accompagnement: string
      prix: string
    }
  ]
}

const restauModel = new Schema<Ohmyfood>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  place: { type: String, required: true },
  nouveau: { type: Boolean, required: true },
  entree: [
    {
      principal: { type: String, required: true },
      accompagnement: { type: String, required: true },
      prix: { type: String, required: true },
    },
  ],
  plat: [
    {
      principal: { type: String, required: true },
      accompagnement: { type: String, required: true },
      prix: { type: String, required: true },
    },
  ],
  dessert: [
    {
      principal: { type: String, required: true },
      accompagnement: { type: String, required: true },
      prix: { type: String, required: true },
    },
  ],
})

export const OhmyfoodModel = mongoose.model<Ohmyfood>("Ohmyfood", restauModel)
