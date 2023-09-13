import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Kasa } from "../../utils/type"
import Carroussel from "../../components/kasa/carroussel/Carroussel"
import Dropdown from "../../components/kasa/dropdown/Dropdown"
import Ratings from "../../components/kasa/ratings/Ratings"
import "./logement.css"

export default function Logement() {
  // STATE

  const [accommodation, setAccommodation] = useState<Kasa>()

  // EFFECT

  const { id } = useParams()

  const url = `http://localhost:8000/kasa/${id}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const datas = await response.json()
        setAccommodation(datas)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [url])

  if (accommodation !== undefined) {
    const rentalEquipment = accommodation.equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>
    })

    const pictures = accommodation.pictures.map((pics, index) => {
      return <img key={index} className="image" src={pics} alt="habitation" />
    })

    const tags = accommodation.tags.map((tag, index) => {
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
            <p className="rentalTitle">{accommodation.title}</p>
            <p className="rentalPlace">{accommodation.location}</p>
            <div className="tagWrapper">{tags}</div>
          </div>
          <div className="hostAndRate">
            <div className="host">
              <p className="renterName">{accommodation.host.name}</p>
              <img
                className="renterPicture"
                src={accommodation.host.picture}
                alt="Profil du loueur"
              />
            </div>
            <div className="rates">
              <Ratings rate={accommodation.rating} />
            </div>
          </div>
        </section>

        <aside className="kasa_logement_aside">
          <Dropdown name="Description" content={accommodation.description} />
          <Dropdown name="Équipement" content={rentalEquipment} />
        </aside>
      </>
    )
  }
}
