import { Link } from "react-router-dom"
import logofooter from "../../../assets/kasa/logofooter.svg"
import "./footer.css"

export default function Footer() {
  return (
    <>
      <footer className="kasa_footer">
        <Link to={`/project/kasa`}>
          <img src={logofooter} alt="Logo Kasa"></img>
        </Link>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  )
}
