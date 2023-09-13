import multer from "multer"

type Myme = {
  "image/jpg": string
  "image/jpeg": string
  "image/png": string
  [file: string]: string
}

const MIME_TYPES: Myme = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
}

export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "dist/images")
  },
  filename: (req, file, callback) => {
    const name = file?.originalname.split(" ").join("_")
    const extension = MIME_TYPES[file?.mimetype]
    callback(null, name + "_" + Date.now() + "." + extension)
  },
})

export const upload = multer({ storage: storage }).single("urlScreenshot")
