import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons"

import { Link } from "react-router-dom"

import Bannierekanap from "../../../assets/kanap/bannierekanap.webp"
import Logokanap from "../../../assets/kanap/logokanap.png"

export default function Kanapheader() {
  return (
    <>
      <header className="Kanap_header">
        <div className="limitedWidthBlockContainer informations">
          <div className="limitedWidthBlock">
            <ul className="kanap_ul">
              <li>
                <FontAwesomeIcon
                  className="informations__phone"
                  icon={faPhone}
                />
                01 23 45 67 89
              </li>
              <li>
                <FontAwesomeIcon
                  className="informations__mail"
                  icon={faEnvelope}
                />
                support@name.com
              </li>
              <li>
                <FontAwesomeIcon
                  className="informations__address"
                  icon={faLocationDot}
                />
                01 23 45 67 89
              </li>
            </ul>
          </div>
        </div>
        <div className="limitedWidthBlockContainer menu">
          <div className="limitedWidthBlock">
            <Link to={"/project/kanap"}>
              <img
                className="logo"
                src={Logokanap}
                alt="Logo de l'entreprise"
              />
            </Link>
            <nav>
              <ul>
                <Link to={"/project/kanap"}>
                  <li>Accueil</li>
                </Link>
                <Link to={"/project/kanap/cart"}>
                  <li>Panier</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        <img className="banniere" src={Bannierekanap} alt="Baniere" />
      </header>
    </>
  )
}
