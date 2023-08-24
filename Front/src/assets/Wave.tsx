import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const G = styled.g<ThemeProps>`
  stroke: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
`

export default function Wave() {
  const { theme } = useContext(ThemeContext)

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 800">
      <G fill="none" $isDarkMode={theme === "dark"} strokeLinecap="round">
        <path d="M0 360q600-110 1200 40t1200-40"></path>
        <path d="M0 315q600-65 1200 85t1200-85"></path>
        <path d="M0 270q600-20 1200 130t1200-130"></path>
        <path d="M0 225q600 25 1200 175t1200-175"></path>
        <path d="M0 180q600 70 1200 220t1200-220"></path>
        <path d="M0 135q600 115 1200 265t1200-265"></path>
        <path d="M0 90q600 160 1200 310T2400 90"></path>
      </G>
    </svg>
  )
}
