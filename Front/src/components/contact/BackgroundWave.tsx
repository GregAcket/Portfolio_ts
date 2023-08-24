import { useContext } from "react"
import { ThemeContext } from "../../utils/ThemeProvider"
import { styled } from "styled-components"
import { ThemeProps } from "../../utils/type"

const StyledWave = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
`

export default function BackgroundWave() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <StyledWave
          $isDarkMode={theme === "dark"}
          d="M0 256l48-26.7c48-26.3 144-80.3 240-96C384 117 480 139 576 176s192 91 288 74.7C960 235 1056 149 1152 144s192 69 240 106.7l48 37.3V0H0z"
        ></StyledWave>
      </svg>
    </>
  )
}
