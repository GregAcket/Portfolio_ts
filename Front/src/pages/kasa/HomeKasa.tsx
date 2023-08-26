import bannerhomepage from "../../assets/kasa/eric-muhr-P_XxsdVgtpQ-unsplash.webp"
import Thumb from "../../components/kasa/thumb/Thumb"
import "./home.css"

export default function HomeKasa() {
  return (
    <>
      <div className="containerHomeBanner">
        <p className="textHomeBanner">Chez vous, partout et ailleurs</p>
        <img
          className="homeBanner"
          src={bannerhomepage}
          alt="Forest Landscape"
        ></img>
      </div>
      <section className="gallery">
        <Thumb />
      </section>
    </>
  )
}
