import { MouseEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/panthere/img/logo.webp"
import Lightbox from "./PanthereLightbox"

import "./pantheresite.css"
import { lightboxPictureType } from "../../utils/type"

type PanthereProps = {
  goToContactPage: () => void
}

export default function PanthereMain({ goToContactPage }: PanthereProps) {
  // STATE

  const [isLightboxShown, setLightbox] = useState(false)
  const [whichPicture, setPicture] = useState<lightboxPictureType>({})
  const [pantherePics, setPantherePics] = useState<lightboxPictureType[]>([])

  // EFFECT

  const url = "http://localhost:8000/panthere"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const datas = await response.json()
        setPantherePics(datas)
        setPicture(datas)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [url])

  // LOGIC

  let hideLightbox = () => {
    setLightbox(false)
  }

  let showLightbox = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLElement
    const grab = target.closest(".panthere_bloc4_article")

    if (grab) {
      const idString = grab.getAttribute("data-id")
      if (idString) {
        const id = parseInt(idString)
        const check = pantherePics.find((search) => search.id === id)
        if (check) {
          setPicture(check)
          setLightbox(true)
        }
      }
    }
  }

  let Article = pantherePics.map((image) => {
    return (
      <article
        className="panthere_bloc4_article"
        data-id={image.id}
        data-text={image.text}
        key={image.id}
      >
        <Link
          to="#"
          className="panthere_bloc_4_a"
          onClick={(e) => showLightbox(e)}
          aria-label="Lien vers le carroussel d'images"
        >
          <img
            src={image.url}
            className="panthere_bloc4_img"
            width="270"
            height="270"
            alt="site web pour agence de mariage"
          />
        </Link>
        <h3 className="panthere_bloc4_h3">{image.h3}</h3>
        <p className="panthere_bloc4_p">{image.p}</p>
      </article>
    )
  })

  return (
    <>
      <section id="bloc-1">
        <img
          src={logo}
          className="panthere_logo"
          width="100"
          height="100"
          alt="Logo Agence La Panthère"
        />
        <h1 className="panthere_h1">
          La Panthère <br />
          Agence de web design
        </h1>
        <Link
          to="#"
          aria-label="Lien vers la page contact"
          className="panthere_button_contact"
          onClick={goToContactPage}
        >
          Contact
        </Link>
      </section>

      <section id="bloc-2">
        <h2 className="panthere_bloc2_h2">
          Le web design à l'aide des entreprises
        </h2>
        <p className="panthere_bloc2_p">
          Pour devenir attractif et visible sur internet
        </p>
        <aside className="panthere_bloc2_aside">
          <div className="panthere_bloc2_div">
            <span className=" panthere_bloc2_span"></span>
            <h3 className="panthere_bloc2_h3">Web design</h3>
            <p className="panthere_bloc2_p">
              Que vous ayez un site web qui a besoin d'un rafraîchissement ou
              que vous partiez de zéro, laissez-nous vous réaliser un design
              dont vous serez fier.
            </p>
          </div>
          <div className="panthere_bloc2_div">
            <span className="panthere_bloc2_span"></span>
            <h3 className="panthere_bloc2_h3">Stratégie</h3>
            <p className="panthere_bloc2_p">
              Plutôt que de suggérer des designs à la mode, nous travaillerons
              avec vous pour comprendre vos objectifs commerciaux afin de vous
              proposer le meilleur design possible.
            </p>
          </div>
          <div className="panthere_bloc2_div">
            <span className="panthere_bloc2_span"></span>
            <h3 className="panthere_bloc2_h3">Illustrations</h3>
            <p className="panthere_bloc2_p">
              Un bon design n'est rien sans de bonnes illustrations. Laissez
              faire notre équipe de graphistes talentueux pour donner à vos
              pages une touche finale d'élégance.
            </p>
          </div>
        </aside>
        <div className="panthere_bloc2_quoteWrapper">
          <q>
            L'agence La Panthère est une excellente agence web ! Les web
            designers ont réussi à capturer l'essence de notre entreprise et à
            l'integrer à notre site. Cela a aidé à doubler nos ventes en ligne à
            Lyon.
          </q>
          <p>Maxime Guibard, PDG de À vos fourchettes</p>
        </div>
      </section>

      <section id="bloc-3">
        <div className="panthere_bloc3_div">
          <h2 className="panthere_bloc3_h2">
            Developper votre entreprise autour de Lyon
          </h2>
          <p>
            Nous travaillons pour aider les entreprises locales à attirer de
            nouveaux clients.
          </p>
          <p>
            Nous aimons collaborer avec des entrepreneurs créatifs et des
            entreprises locale, qu’elles aient besoin de créer un site de A à Z
            ou de donner un coup de jeune à leur site. Que vous ayez besoin
            d’une identité visuelle complète ou d’une refonte de votre site,
            n’hésitez pas à nous contacter. Nous travaillerons ensemble pour
            créer des sites beau et bien structurés, qui seront facilement
            trouvable sur les moteurs de recherche.
          </p>
          <Link
            to="#"
            aria-label="Lien vers la page contact"
            className="panthere_button_contact"
            onClick={goToContactPage}
          >
            Contact
          </Link>
        </div>
      </section>

      <section id="bloc-4">
        <div className="panthere_bloc4_div1">
          <h3 className="panthere_bloc4_h3">
            Nous travaillons avec beaucoup d'entreprises, voici nos
            réalisations.
          </h3>
          <div className="panthere_bloc4_div2">{Article}</div>
        </div>
      </section>

      <Lightbox
        show={isLightboxShown}
        willClose={hideLightbox}
        whichPicture={whichPicture}
        pantherePics={pantherePics}
      />
    </>
  )
}
