import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faCheck,
  faHeart,
  faUtensils,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons"

import Svg from "./svg"

import logo from "../../assets/ohmyfood/logoOmf.svg"

import "./ohmyfoodsite.css"
import { Ohmyfood } from "../../utils/type"

export default function Restaurant() {
  const { name } = useParams()

  const [restauData, setRestauData] = useState<Ohmyfood>()

  const url = `http://localhost:8000/ohmyfood/${name}`

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

  let entrees = restauData?.entree.map((entree, index) => (
    <li className="menu_card" key={index}>
      <div className="menu_content">
        <p className="menu_principal">{entree.principal}</p>
        <p className="menu_accompagnement">{entree.accompagnement}</p>
      </div>

      <div className="checkprice">
        <p className="menu_prix">{entree.prix}</p>
        <span className="check">
          <FontAwesomeIcon
            className="omf_fa-solid omf_fa-check"
            icon={faCheck}
          />
        </span>
      </div>
    </li>
  ))

  let plats = restauData?.plat.map((plat, index) => (
    <li className="menu_card" key={index}>
      <div className="menu_content">
        <p className="menu_principal">{plat.principal}</p>
        <p className="menu_accompagnement">{plat.accompagnement}</p>
      </div>

      <div className="checkprice">
        <p className="menu_prix">{plat.prix}</p>
        <span className="check">
          <FontAwesomeIcon
            className="omf_fa-solid omf_fa-check"
            icon={faCheck}
          />
        </span>
      </div>
    </li>
  ))

  let desserts = restauData?.dessert.map((dessert, index) => (
    <li className="menu_card" key={index}>
      <div className="menu_content">
        <p className="menu_principal">{dessert.principal}</p>
        <p className="menu_accompagnement">{dessert.accompagnement}</p>
      </div>

      <div className="checkprice">
        <p className="menu_prix">{dessert.prix}</p>
        <span className="check">
          <FontAwesomeIcon
            className="omf_fa-solid omf_fa-check"
            icon={faCheck}
          />
        </span>
      </div>
    </li>
  ))

  return (
    <>
      {/* this svg is needed to add the linear-gradient effect when the heart svg is hovered*/}

      <Svg />

      <header className="omf_menu omf_header">
        <Link to={"../ohmyfood"}>
          <FontAwesomeIcon
            className="omf_fa-solid omf_fa-arrow-left"
            icon={faArrowLeft}
          />
          <img className="omf_restau_logo" src={logo} alt="logo" />
        </Link>
      </header>

      <main className="page_restaurant">
        <img
          className="menu_img"
          src={restauData?.image}
          alt={restauData?.name}
        />

        <section className="menu_full">
          <div className="menu_restaurant">
            <h1 className="omf_h1">{restauData?.name}</h1>
            <FontAwesomeIcon
              className="omf_fa-regular omf_fa-heart"
              icon={faHeart}
            />
          </div>

          <section className="entree">
            <ul className="omf_ul">
              <li>
                <p className="menu_title">Entrées</p>
              </li>

              {entrees}
            </ul>
          </section>

          <section className="plats">
            <ul className="omf_ul">
              <li>
                <p className="menu_title">Plats</p>
              </li>

              {plats}
            </ul>
          </section>

          <section className="dessert">
            <ul className="omf_ul">
              <li>
                <p className="menu_title">Desserts</p>
              </li>

              {desserts}
            </ul>
          </section>

          <button className="omf_btn omf_btn--color omf_btn_commander">
            Commander
          </button>
        </section>
      </main>

      <footer className="omf_footer">
        <ul className="omf_ul">
          <li>
            <Link to={"/ohmyfood"}>Ohmyfood</Link>
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
