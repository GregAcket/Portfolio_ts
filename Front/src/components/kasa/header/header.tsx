import { Link } from "react-router-dom"
import logo from "../../../assets/kasa/logo.svg"
import "./header.css"

export default function Header() {
  return (
    <>
      <header className="Kasa_header">
        <Link to={`/project/kasa`}>
          <img className="kasa_header_img" src={logo} alt="Logo Kasa"></img>
        </Link>
        <nav>
          <ul className="kasa_header_ul">
            <li className="kasa_header_li">
              <Link to={`/project/kasa`} className={"kasa_header_a accueil"}>
                Accueil
              </Link>
            </li>
            <li className="kasa_header_li">
              <Link
                to={`/project/kasa/About`}
                className={"kasa_header_a apropos"}
              >
                A propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
