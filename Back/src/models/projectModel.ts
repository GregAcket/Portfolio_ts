import mongoose from "mongoose"

const { Schema } = mongoose

type Project = {
  id: number
  name: string
  urlScreenshot: string
  urlLogo: string
  altLogo: string
  colorUnderline: string
  title: string
  link: string
}

const projectModel = new Schema<Project>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  urlScreenshot: { type: String, required: true },
  urlLogo: { type: String, required: true },
  altLogo: { type: String, required: true },
  colorUnderline: { type: String, required: true },
  title: { type: String, required: true },
  link: { type: String, required: true },
})

export const Project = mongoose.model<Project>("project", projectModel)
