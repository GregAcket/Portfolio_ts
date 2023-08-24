import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { ThemeContext } from "../../utils/ThemeProvider"
import { useContext } from "react"
import { ThemeProps } from "../../utils/type"
import Mail from "./Mail"
import Github from "./Github"
import Linkedin from "./Lkd"
import Hills from "./Hills"
import CampGround from "./Campground"

const StyledFooter = styled.footer<ThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  min-height: 100px;
  line-height: 1.5;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};
`

const StyledSocials = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0px;
  width: 66%;
  svg {
    width: 40px;
    height: 40px;
  }
`

const Links = styled(Link)`
  transition: border-bottom 400ms;

  &:hover {
    text-decoration: none;
    border-bottom: 1px solid green;
  }
`

export default function Footer() {
  //CTXT

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Hills />

      <CampGround />
      <StyledFooter $isDarkMode={theme === "dark"}>
        <StyledSocials>
          <Links
            reloadDocument
            to="#contact"
            aria-label="Lien vers la section contact"
          >
            <Mail />
          </Links>
          <Links
            to="https://github.com/GregAcket"
            target="_blank"
            aria-label="Lien vers le site Github"
          >
            <Github />
          </Links>
          <Links
            to="https://www.linkedin.com/in/gregory-a-187743115"
            target="_blank"
            aria-label="Lien vers le site LinkedIn"
          >
            <Linkedin />
          </Links>
        </StyledSocials>
      </StyledFooter>
    </>
  )
}
