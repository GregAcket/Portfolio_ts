import { Dispatch, SetStateAction } from "react"

export type ThemeProps = {
  $isDarkMode: boolean
  $isChecked?: boolean
}

export type IntroProps = {
  setIsLoaded: Dispatch<SetStateAction<Boolean>>
}

export type StyleProjectProps = {
  $isProjectShown?: boolean
  $ColorUnderline?: string
  $isProjectsWrapperHidden?: boolean
  $isMasterWrapperShown?: boolean
  $isIntersected?: boolean
}

export type Ohmyfood = {
  id: number
  image: string
  name: string
  nouveau: boolean
  place: string
  entree: [{ accompagnement: string; principal: string; prix: string }]

  plat: [{ accompagnement: string; principal: string; prix: string }]
  dessert: [{ accompagnement: string; principal: string; prix: string }]
}

export type KanapType = {
  _id: string
  altTxt: string
  colors: string[]
  description: string
  imageUrl: string
  name: string
  price: number
}

export type KanapCart = {
  id: string
  altTxt: string
  couleur: string
  description: string
  imageUrl: string
  name: string
  price: number
  quantity: number
}

export type lightboxPictureType = {
  id?: number
  url?: string
  text?: string
  alt?: string
  h3?: string
  p?: string
}

export type Project = {
  id: number
  altLogo: string
  description: string
  github: string
  link: string
  screenshot: string
  smallscreenshot: string
  techno: string[]
  urlLogo: string
  title: string
  comment: string
}
