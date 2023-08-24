import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

const Svg = styled.svg`
  position: absolute;
  bottom: -690px;
  left: 35px;
  width: 60px;
  height: 60px;
  transform: rotate(-25deg);
  @media (min-width: 768px) {
    bottom: -880px;
    left: 130px;
  }
  @media (min-width: 910px) {
    bottom: -920px;
    left: 150px;
  }

  @media (min-width: 992px) {
    bottom: -930px;
    left: 25px;
  }
`

export default function SquareBrackets() {
  const { theme } = useContext(ThemeContext)

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="#000"
      viewBox="0 0 256 256"
    >
      <Path
        $isDarkMode={theme === "dark"}
        d="M44 44v168h36a4 4 0 010 8H40a4 4 0 01-4-4V40a4 4 0 014-4h40a4 4 0 010 8zm172-8h-40a4 4 0 000 8h36v168h-36a4 4 0 000 8h40a4 4 0 004-4V40a4 4 0 00-4-4z"
      ></Path>
    </Svg>
  )
}
