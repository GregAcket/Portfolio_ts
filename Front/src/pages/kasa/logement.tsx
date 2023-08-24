import { useParams } from "react-router-dom"
import Carroussel from "../../components/kasa/carroussel/carroussel"
import Dropdown from "../../components/kasa/dropdown/dropdown"
import Ratings from "../../components/kasa/ratings/ratings"
import logementJson from "../../utils/kasa/logements.json"
import "./logement.css"

export default function Logement() {
  let id = useParams()

  let checkedRental = logementJson.find((search) => search.id === id.id)

  if (checkedRental !== undefined) {
    let rentalEquipment = checkedRental.equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>
    })

    let pictures = checkedRental.pictures.map((pics, index) => {
      return <img key={index} className="image" src={pics} alt="habitation" />
    })

    let tags = checkedRental.tags.map((tag, index) => {
      return (
        <p className="tag" key={index}>
          {tag}
        </p>
      )
    })

    return (
      <>
        <Carroussel image={pictures} />

        <section className="rentalIdentity">
          <div className="place">
            <p className="rentalTitle">{checkedRental.title}</p>
            <p className="rentalPlace">{checkedRental.location}</p>
            <div className="tagWrapper">{tags}</div>
          </div>
          <div className="hostAndRate">
            <div className="host">
              <p className="renterName">{checkedRental.host.name}</p>
              <img
                className="renterPicture"
                src={checkedRental.host.picture}
                alt="Profil du loueur"
              />
            </div>
            <div className="rates">
              <Ratings rate={checkedRental.rating} />
            </div>
          </div>
        </section>

        <aside className="kasa_logement_aside">
          <Dropdown name="Description" content={checkedRental.description} />
          <Dropdown name="Équipement" content={rentalEquipment} />
        </aside>
      </>
    )
  }
}
