import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`
const Svg = styled.svg`
  position: absolute;
  bottom: -1850px;
  left: 15%;
  width: 65px;
  height: 65px;
  transform: rotate(35deg);

  @media (min-width: 768px) {
    bottom: -1480px;
    left: 75%;
  }

  @media (min-width: 992px) {
    bottom: -800px;
    left: 45%;
  }

  @media (min-width: 1180px) {
    left: 550px;
  }
`

export default function Code() {
  const { theme } = useContext(ThemeContext)

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 32 32"
    >
      <Path
        $isDarkMode={theme === "dark"}
        d="M7.11 23.52l1.42-1.41C5.14 18.72 3.37 17 2.39 16l6.14-6.11a1 1 0 10-1.42-1.42L.29 15.29A1.05 1.05 0 000 16a1 1 0 00.3.71zM31.71 15.29c-.1-.09-6.82-6.82-6.82-6.82l-1.41 1.42c3.38 3.38 5.15 5.16 6.13 6.09l-6.13 6.13a1 1 0 00.7 1.71 1 1 0 00.71-.3l6.82-6.81A1 1 0 0032 16a1 1 0 00-.29-.71zM13.27 27.91a1 1 0 001-.76L19.7 5.33a1 1 0 00-1.94-.48L12.3 26.67a1 1 0 00.7 1.21 1 1 0 00.27.03z"
      ></Path>
    </Svg>
  )
}
