import { styled } from "styled-components"
import bannerAbout from "../../assets/kasa/kalen-emsley-Bkci_8qcdvQ-unsplash 2.webp"
import Dropdown from "../../components/kasa/dropdown/Dropdown"
import dropdownjson from "../../utils/kasa/dropdown.json"

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  max-width: 1280px;
  width: 100%;
`

const Img = styled.img`
  max-width: 1240px;
  width: 100%;
  height: 223px;
  margin-top: 44px;
  background-color: black;
  mix-blend-mode: darken;
  border-radius: 25px;
  object-fit: cover;

  @media all and (max-width: 549px) {
    margin-top: 17px;
  }
`

export default function About() {
  return (
    <>
      <Img src={bannerAbout} alt="Mountain Landscape" />

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
