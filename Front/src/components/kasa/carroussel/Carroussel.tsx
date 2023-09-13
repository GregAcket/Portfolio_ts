import "./carroussel.css"
import arrow from "../../../assets/kasa/arrow.svg"
import { useState } from "react"

type CarrousselType = {
  image: JSX.Element[]
}

export default function Carroussel({ image }: CarrousselType) {
  const [n, setn] = useState(0)

  if (n < 0) {
    setn(image.length - 1)
  } else if (n > image.length - 1) {
    setn(0)
  }

  return (
    <>
      <div className="carrousselWrapper">
        {image[n]}
        {image.length !== 1 && (
          <div className="buttonWrapper">
            <button onClick={() => setn(n - 1)}>
              <img
                className="left arrow"
                src={arrow}
                alt="logo flèche gauche"
              />
            </button>
            <button onClick={() => setn(n + 1)}>
              <img
                className="right arrow"
                src={arrow}
                alt="logo flèche droite"
              />
            </button>
            <p>
              {n + 1}/{image.length}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
