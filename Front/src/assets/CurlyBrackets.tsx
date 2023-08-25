import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

const Svg = styled.svg`
  position: absolute;
  bottom: -40px;
  left: 70%;
  width: 70px;
  height: 70px;
  transform: rotate(30deg);

  @media (min-width: 768px) {
    bottom: -100px;
    left: 70%;
  }

  @media (min-width: 992px) {
    bottom: 15px;
    left: 60%;
  }

  @media (min-width: 1180px) {
    left: 700px;
  }
`

export default function CurlyBrackets() {
  const { theme } = useContext(ThemeContext)

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 24 24"
    >
      <Path
        $isDarkMode={theme === "dark"}
        d="M9 22H7.703A3.707 3.707 0 014 18.297V15a2.002 2.002 0 00-2-2v-1a2.002 2.002 0 002-2V6.703A3.707 3.707 0 017.703 3H9v1H7.703A2.706 2.706 0 005 6.703V10a3 3 0 01-1.343 2.5A3 3 0 015 15v3.297A2.706 2.706 0 007.703 21H9zm11-3.703V15a2.002 2.002 0 012-2v-1a2.002 2.002 0 01-2-2V6.703A3.707 3.707 0 0016.297 3H15v1h1.297A2.706 2.706 0 0119 6.703V10a3 3 0 001.343 2.5A3 3 0 0019 15v3.297A2.706 2.706 0 0116.297 21H15v1h1.297A3.707 3.707 0 0020 18.297z"
      ></Path>
    </Svg>
  )
}
