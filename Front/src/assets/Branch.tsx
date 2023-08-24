import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

const Svg = styled.svg`
  position: absolute;
  top: 2000px;
  right: 55px;
  width: 50px;
  height: 50px;
  transform: rotate(-50deg);

  @media (min-width: 768px) {
    top: 1600px;
    right: 155px;
  }

  @media (min-width: 992px) {
    top: 1780px;
    right: 190px;
  }

  @media (min-width: 1200px) {
    top: 1835px;
    right: 190px;
  }
`

export default function Branch() {
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
        d="M5.75 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 19.25a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM5.75 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
      ></Path>
      <Path
        $isDarkMode={theme === "dark"}
        d="M5.75 16.75A.75.75 0 006.5 16V8A.75.75 0 005 8v8c0 .414.336.75.75.75z"
      ></Path>
      <Path
        $isDarkMode={theme === "dark"}
        d="M17.5 8.75v-1H19v1a3.75 3.75 0 01-3.75 3.75h-7a1.75 1.75 0 00-1.75 1.75H5A3.25 3.25 0 018.25 11h7a2.25 2.25 0 002.25-2.25z"
      ></Path>
    </Svg>
  )
}
