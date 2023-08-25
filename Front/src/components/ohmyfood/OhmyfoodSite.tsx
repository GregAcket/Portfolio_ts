import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Ohmyfood } from "../../utils/type"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faMobileScreenButton,
  faListUl,
  faStore,
  faHeart,
  faUtensils,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons"

import Svg from "./svg"

import logo from "../../assets/ohmyfood/logoOmf.svg"

import "./ohmyfoodsite.css"

export default function Ohmyfoodsite() {
  // STATE

  const [restauData, setRestauData] = useState<Ohmyfood[]>([])

  // EFFECT
  const url = "http://localhost:8000/ohmyfood"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const DataJson = await response.json()
        setRestauData(DataJson)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [url])

  // LOGIC

  const target = document.querySelector(".omf_header")
  const scroll = () => {
    target?.scrollIntoView()
  }

  const Restau = () => {
    const restaux = restauData.map((restau) => {
      return (
        <Link to={restau.name} key={restau.id} onClick={scroll}>
          <article className="card">
            <img className="card_img" src={restau.image} alt={restau.name} />

            <div className="omf_card_text">
              <h3 className="card_restaurant card_restaurant-name omf_h3">
                {restau.name}
              </h3>
              <FontAwesomeIcon
                className="omf_fa-solid omf_fa-heart"
                icon={faHeart}
              />
              <p className="card_restaurant card_restaurant-place">
                {restau.place}
              </p>
              {restau.nouveau === true && (
                <span className="card_new">Nouveau</span>
              )}
            </div>
          </article>
        </Link>
      )
    })
    return restaux
  }

  return (
    <>
      {/* This svg is needed to add the linear-gradient effect when the heart svg is hovered*/}
      <Svg />

      <header className="omf_header">
        <Link to={"/project/ohmyfood"}>
          <img className="omf_mainPage_logo" src={logo} alt="logo" />
        </Link>
      </header>

      <main className="omf_main">
        <button className="omf_btn omf_btn__location">
          <FontAwesomeIcon
            className="omf_fa-solid omf_fa-location-dot"
            icon={faLocationDot}
          />
          Paris, Belleville
        </button>

        <section className="omf_top">
          <h1 className="omf_h1">Réservez le menu qui vous convient</h1>
          <p className="omf_p">
            Découvrez des restaurants d'exception, séléctionnés par nos soins.
          </p>
          <a href="#restaurant" className="omf_btn omf_btn--color">
            Explorer nos restaurants
          </a>
        </section>

        <aside className="omf_aside">
          <p className="omf_p">Fonctionnement</p>

          <ol>
            <li>
              <span className="list_numbers">1</span>
              <FontAwesomeIcon
                className="omf_fa-solid"
                icon={faMobileScreenButton}
              />
              Choisissez un restaurant
            </li>
            <li>
              <span className="list_numbers">2</span>
              <FontAwesomeIcon className="omf_fa-solid" icon={faListUl} />
              Composez votre menu
            </li>
            <li>
              <span className="list_numbers">3</span>
              <FontAwesomeIcon className="omf_fa-solid" icon={faStore} />
              Dégustez au restaurant
            </li>
          </ol>
        </aside>

        <section id="restaurant">
          <h2 className="omf_h2">Restaurants</h2>

          <Restau />
        </section>
      </main>

      <footer className="omf_footer">
        <ul className="omf_ul">
          <li>
            <Link to={"/project/ohmyfood"}>Ohmyfood</Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon
                className="omf_fa-solid omf_fa-utensils"
                icon={faUtensils}
              />
              Proposer un restaurant
            </Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon
                className="omf_fa-solid omf_fa-handshake-angle"
                icon={faHandshakeAngle}
              />
              Devenir partenaire
            </Link>
          </li>
          <li>
            <Link to="#">Mentions légales</Link>
          </li>
          <li>
            <a href="mailto:paul@ohmyfood.fr">Contact</a>
          </li>
        </ul>
      </footer>
    </>
  )
}
