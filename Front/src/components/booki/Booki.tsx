import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStar,
  faLocationDot,
  faMoneyBill1Wave,
  faChildReaching,
  faHeart,
  faDog,
  faInfo,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"

import Logo from "../../assets/booki/icons/logoBooki.webp"
import { useEffect, useState } from "react"

import "./bookisite.css"

type Booki = {
  urlPicture: string
  alt: string
  name: string
  price?: string
  stars?: string
}

export default function Bookisite() {
  //STATE

  const [cards, setCards] = useState<Booki[]>([])

  //EFFECT

  const url = "http://localhost:8000/booki"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const datas = await response.json()
        setCards(datas)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [url])

  const Hebergements = () => {
    const mappedHbg = cards.map((card) => {
      return (
        <Link key={card.name} className="booki_a" to="#">
          <article className="hbg_cards">
            <img className="hbg_img" src={card.urlPicture} alt={card.alt} />

            <div className="footer_card">
              <div className="booki_card_text">
                <span className="bolder">{card.name}</span>

                <p>
                  Nuit à partir de <span className="bolder">{card.price}</span>
                </p>
              </div>

              {/* faire la ratings  */}

              <div className="card_star bleue">
                <div className="bleue">
                  <FontAwesomeIcon className="bleue" icon={faStar} />
                </div>
                <div className="bleue">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="bleue">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="bleue">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="gris">
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </article>
        </Link>
      )
    })
    return mappedHbg.slice(0, 6)
  }

  const Populaire = () => {
    const mappedPop = cards.map((card) => {
      return (
        <Link key={card.name} className="booki_a" to="#">
          <article className="aside_card">
            <img src={card.urlPicture} alt={card.alt} />

            <div className="footer_card">
              <div className="booki_card_text">
                <span className="bolder">{card.name}</span>

                <p>
                  Nuit à partir de <span className="bolder">{card.price}</span>
                </p>
              </div>

              <div className="card_star">
                <div className="bleue">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="bleue">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="bleue">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="bleue">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="gris">
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </article>
        </Link>
      )
    })
    return mappedPop.slice(6, 9)
  }

  return (
    <>
      <header className="booki_header">
        <Link to={"/project/booki"}>
          <img className="booki_image" src={Logo} alt="Logo Booki" />
        </Link>
        <nav className="booki_nav">
          <ul className="booki_ul">
            <li>
              <a className="booki_a" href="#hebergement">
                Hébergements
              </a>
            </li>
            <li>
              <a className="booki_a" href="#activite">
                Activités
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="booki_main">
        <section className="booki_top">
          <h1 className="booki_h1">
            Trouvez votre hébergement pour des vacances de rêve
          </h1>

          <p className="booki_p">En plein centre ville ou en pleine nature</p>

          <form className="booki_form">
            <button>
              <FontAwesomeIcon
                className="booki_fa-solid"
                icon={faLocationDot}
              />
            </button>
            <input
              className="booki_input"
              type="text"
              placeholder="Marseille, France"
              id="ville"
              name="ville"
            />
            <button className="research_button">
              <FontAwesomeIcon
                className="booki_fa-solid"
                icon={faMagnifyingGlass}
              />
              <span className="bolder">Rechercher</span>
            </button>
          </form>

          <div id="filtres_main_wrapper">
            <span className="bold">Filtres</span>

            <div className="filtre">
              <div className="contours">
                <FontAwesomeIcon
                  className="booki_fa-solid"
                  icon={faMoneyBill1Wave}
                />
                <span className="bold">Economiques</span>
              </div>
            </div>

            <div className="filtre">
              <div className="contours">
                <FontAwesomeIcon
                  className="booki_fa-solid"
                  icon={faChildReaching}
                />
                <span className="bold">Familial</span>
              </div>
            </div>

            <div className="filtre">
              <div className="contours">
                <FontAwesomeIcon className="booki_fa-solid" icon={faHeart} />
                <span className="bold">Romantique</span>
              </div>
            </div>

            <div className="filtre">
              <div className="contours">
                <FontAwesomeIcon className="booki_fa-solid " icon={faDog} />
                <span className="bold">Animaux autorisés</span>
              </div>
            </div>
          </div>
          <div className="booki_info">
            <FontAwesomeIcon
              className="booki_fa-solid booki_fa-info"
              icon={faInfo}
            />
            <p>Plus de 500 logements sont disponibles dans cette ville</p>
          </div>
        </section>

        <section className="hbg_main_wrapper">
          <div className="hbg_main">
            <h2 className="booki_h2" id="hebergement">
              Hébergements à Marseille
            </h2>

            <div className="hbg_main_card">
              <Hebergements />
            </div>

            <Link className="booki_a" to="#">
              <span className="bolder">Afficher Plus</span>
            </Link>
          </div>

          <aside className="booki_aside">
            <span className="bolder">
              Les plus populaires
              <FontAwesomeIcon icon={faStar} />
            </span>

            <Populaire />
          </aside>
        </section>

        <section className="activite_main_wrapper">
          <h2 className="bolder booki_h2" id="activite">
            Activités à Marseille
          </h2>

          <div className="activites_card">
            <Link className="vieux booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={cards[9]?.urlPicture}
                  alt={cards[9]?.alt}
                />

                <p className="booki_p">
                  <span className="bolder">{cards[9]?.name}</span>
                </p>
              </article>
            </Link>
          </div>

          <div className="activites_card">
            <Link className="fort booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={cards[10]?.urlPicture}
                  alt={cards[10]?.alt}
                />

                <p className="booki_p">
                  <span className="bolder">{cards[10]?.name}</span>
                </p>
              </article>
            </Link>

            <Link className="ile booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={cards[11]?.urlPicture}
                  alt={cards[11]?.alt}
                />

                <p className="booki_p">
                  <span className="bolder">{cards[11]?.name}</span>
                </p>
              </article>
            </Link>
          </div>

          <div className="activites_card">
            <Link className="calanques booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={cards[12]?.urlPicture}
                  alt={cards[12]?.alt}
                />

                <p className="booki_p">
                  <span className="bolder">{cards[12]?.name}</span>
                </p>
              </article>
            </Link>
          </div>

          <div className="activites_card">
            <Link className="garde booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={cards[13]?.urlPicture}
                  alt={cards[13]?.alt}
                />

                <p className="booki_p">
                  <span className="bolder">{cards[13]?.name}</span>
                </p>
              </article>
            </Link>

            <Link className="longchamp booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={cards[14]?.urlPicture}
                  alt={cards[14]?.alt}
                />

                <p className="booki_p">
                  <span className="bolder">{cards[14]?.name}</span>
                </p>
              </article>
            </Link>
          </div>
        </section>
      </main>

      <footer className="booki_footer">
        <div className="footer_column">
          <ul className="booki_footer_ul">
            <li>
              <span className="bolder">A propos</span>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Fonctionnement du site
              </Link>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Conditions générales de vente
              </Link>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Données et confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer_column">
          <ul className="booki_footer_ul">
            <li>
              <span className="bolder">Nos hébergements</span>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Charte qualité
              </Link>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Soumettre votre hôtel
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer_column">
          <ul className="booki_footer_ul">
            <li>
              <span className="bolder">Assistance</span>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Centre d'aide
              </Link>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
