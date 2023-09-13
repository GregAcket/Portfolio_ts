import "./ratings.css"
import greyStar from "../../../assets/kasa/greystar.svg"
import redStar from "../../../assets/kasa/redstar.svg"

type RatingType = {
  rate: string
}

export default function Ratings({ rate }: RatingType) {
  const totalStars = 5
  const ratedStars = parseInt(rate)
  const unratedStars = totalStars - ratedStars

  const starArray = []

  for (let i = 0; i < ratedStars; i++) {
    const redstar = (
      <img className="rating" src={redStar} alt="Etoile de notation" key={i} />
    )

    starArray.push(redstar)
  }
  for (let i = 0; i < unratedStars; i++) {
    const greystar = (
      <img
        className="rating"
        src={greyStar}
        alt="Etoile de notation"
        key={ratedStars + i}
      />
    )

    starArray.push(greystar)
  }

  return <>{starArray}</>
}
