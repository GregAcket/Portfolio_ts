import { Link } from "react-router-dom"
import "./error.css"

export default function Error() {
  return (
    <>
      <section className="error-section">
        <p className="error">404</p>
        <p className="errorText">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to={`/kasa`} className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </>
  )
}
