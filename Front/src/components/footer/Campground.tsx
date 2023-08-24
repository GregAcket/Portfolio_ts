import { useContext } from "react"
import { ThemeContext } from "../../utils/ThemeProvider"
import { styled } from "styled-components"
import { ThemeProps } from "../../utils/type"

const StyledSvg = styled.svg`
  position: relative;
  bottom: 45px;
  left: 25px;
  width: 40px;
  height: 40px;
`

const StyledCampGround = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
`

export default function CampGround() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <StyledCampGround
          $isDarkMode={theme === "dark"}
          d="M377 52c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-39 48.8L249 12c-11-13.8-31.2-16-45-5s-16 31.2-5 45l48 60L12.3 405.4c-8 10-12.3 22.3-12.3 35V464c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-23.6c0-12.7-4.3-25.1-12.3-35L329 112l48-60zm-89 396H168.5L288 291.7 407.5 448H288z"
        ></StyledCampGround>
      </StyledSvg>
    </>
  )
}
