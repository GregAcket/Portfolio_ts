import { useState } from "react"
import arrow from "../../../assets/kasa/arrow.svg"
import "./dropdown.css"

type DropdownType = {
  name: string
  content: string | JSX.Element | JSX.Element[]
}

export default function Dropdown({ name, content }: DropdownType) {
  const [open, setOpen] = useState<boolean>(false)

  return open ? (
    <>
      <article>
        <div className="DropdownButton" onClick={() => setOpen(false)}>
          <p>{name}</p>
          <img className="up" src={arrow} alt="logo flèche"></img>
        </div>
        {typeof content === "object" ? (
          <ul className="text">{content}</ul>
        ) : (
          <p className="text">{content}</p>
        )}
      </article>
    </>
  ) : (
    <>
      <div className="DropdownButton" onClick={() => setOpen(true)}>
        <article>
          <p>{name}</p>
          <img src={arrow} alt="Logo flèche"></img>
        </article>
      </div>
    </>
  )
}
