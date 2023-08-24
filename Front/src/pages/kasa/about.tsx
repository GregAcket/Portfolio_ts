import { styled } from "styled-components"
import bannerAbout from "../../assets/kasa/kalen-emsley-Bkci_8qcdvQ-unsplash 2.webp"
import Dropdown from "../../components/kasa/dropdown/dropdown"
import dropdownjson from "../../utils/kasa/dropdown.json"
import "./about.css"

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  max-width: 1280px;
  width: 100%;
`

export default function About() {
  return (
    <>
      <img className="banner" src={bannerAbout} alt="Mountain Landscape"></img>

      <DropdownWrapper>
        {dropdownjson.map((objet, index) => (
          <Dropdown
            key={index}
            name={objet.name}
            content={objet.text}
          ></Dropdown>
        ))}
      </DropdownWrapper>
    </>
  )
}
