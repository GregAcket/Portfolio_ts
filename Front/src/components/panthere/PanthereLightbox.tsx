import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import "./pantherelightbox.css"
import { useEffect, useState } from "react"
import { lightboxPictureType } from "../../utils/type"

type LightboxPropsType = {
  show: boolean
  willClose: () => void
  whichPicture: lightboxPictureType
  pantherePics: lightboxPictureType[]
}

const Lightbox = ({
  willClose,
  show,
  whichPicture,
  pantherePics,
}: LightboxPropsType) => {
  const showOrHideBox = show
    ? "panthere_lightbox panthere_lightbox_show"
    : "panthere_lightbox panthere_lightbox_hide"

  const [picture, setPicture] = useState<lightboxPictureType>({})

  useEffect(() => {
    setPicture(whichPicture)
  }, [whichPicture])

  function increase() {
    let number = picture.id
    if (number !== undefined) {
      number++
      if (number > pantherePics.length - 1) {
        number = 0
      }
    }
    let check = pantherePics.find((search) => search.id === number)
    if (check !== undefined) {
      setPicture(check)
    }
  }

  function decrease() {
    let number = picture.id
    if (number !== undefined) {
      number--
      if (number < 0) {
        number = pantherePics.length - 1
      }
    }
    let check = pantherePics.find((search) => search.id === number)
    if (check !== undefined) {
      setPicture(check)
    }
  }

  return (
    <>
      <div className={showOrHideBox} onClick={willClose}>
        <div
          className="panthere_main_lightbox"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="panthere_lightbox_carrousselWrapper">
            <img
              className="panthere_lightbox_image"
              src={picture.url}
              alt={picture.text}
              width={450}
              height={450}
            />
            <p className="panthere_lightbox_p">{picture.text}</p>
            <div className="panthere_lightbox_buttonWrapper">
              <button onClick={decrease}>
                <FontAwesomeIcon
                  className="panthere_lightbox_arrow"
                  icon={faChevronLeft}
                />
              </button>
              <button onClick={increase}>
                <FontAwesomeIcon
                  className="panthere_lightbox_arrow"
                  icon={faChevronRight}
                />
              </button>
            </div>
          </div>
          <FontAwesomeIcon
            className="panthere_lightbox_xmark"
            icon={faXmark}
            onClick={willClose}
          />
        </div>
      </div>
    </>
  )
}

export default Lightbox
