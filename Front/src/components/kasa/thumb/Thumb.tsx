import { Link } from "react-router-dom"
import "./thumb.css"
import { useEffect, useState } from "react"
import { Kasa } from "../../../utils/type"

export default function Thumb() {
  // STATE

  const [accommodations, setAccommodations] = useState<Kasa[]>([])

  // EFFECT

  const url = `http://localhost:8000/kasa`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const datas = await response.json()
        setAccommodations(datas)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [url])

  //LOGIC

  const goToHeader = () => {
    const target = document.querySelector(".Kasa_header")
    const scroll = () => {
      setTimeout(() => {
        target?.scrollIntoView()
      }, 200)
    }
    scroll()
  }

  const Accomodations = () => {
    const mapped = accommodations.map((rental) => (
      <Link
        to={"/project/kasa/" + rental.id}
        key={rental.id}
        onClick={() => goToHeader()}
      >
        <article className="homepageArticle">
          <img className="rentalImg" src={rental.cover} alt={rental.title} />
          <p className="rentalName"> {rental.title}</p>
        </article>
      </Link>
    ))
    return mapped
  }

  return (
    <>
      <Accomodations />
    </>
  )
}
