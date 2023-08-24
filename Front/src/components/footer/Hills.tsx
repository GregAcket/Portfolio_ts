import { useContext } from "react"
import { ThemeContext } from "../../utils/ThemeProvider"
import { styled } from "styled-components"
import { ThemeProps } from "../../utils/type"

const StyledHills1 = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
`
const StyledHills2 = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#d0d0d0" : "#292929")};
`
const StyledHills3 = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#a2a2a2" : "#4e4e4e")};
`
const StyledHills5 = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4e4e4e" : "#a2a2a2")};
`
const StyledHills6 = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#292929" : "#d0d0d0")};
`
const StyledHills7 = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`

export default function Hills() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 960 234.477"
      >
        <StyledHills1
          $isDarkMode={theme === "dark"}
          d="M0 1.477l10.7 3.2c10.6 3.1 32 9.5 53.3 21.1 21.3 11.7 42.7 28.7 64 34.4 21.3 5.6 42.7 0 64-1 21.3-1 42.7 2.6 64 2.6 21.3 0 42.7-3.6 64-12.1 21.3-8.5 42.7-21.9 64-23.7 21.3-1.8 42.7 7.8 64 18.2 21.3 10.3 42.7 21.3 64 24 21.3 2.6 42.7-3 64-15.5 21.3-12.5 42.7-31.9 64-42.2 21.3-10.3 42.7-11.7 64-9.7 21.3 2 42.7 7.4 64 10.9 21.3 3.5 42.7 5.1 64 12.8 21.3 7.7 42.7 21.3 64 31.8 21.3 10.5 42.7 17.9 53.3 21.5l10.7 3.7v149H0z"
        ></StyledHills1>
        <StyledHills2
          $isDarkMode={theme === "dark"}
          d="M0 69.477l10.7-4.2c10.6-4.1 32-12.5 53.3-10.8 21.3 1.7 42.7 13.3 64 20.8 21.3 7.5 42.7 10.9 64 3.4 21.3-7.5 42.7-25.9 64-27.7 21.3-1.8 42.7 12.8 64 22.7 21.3 9.8 42.7 14.8 64 5 21.3-9.9 42.7-34.5 64-34.7 21.3-.2 42.7 24.2 64 25.8 21.3 1.7 42.7-19.3 64-17.3 21.3 2 42.7 27 64 41 21.3 14 42.7 17 64 16.5 21.3-.5 42.7-4.5 64-14.7 21.3-10.1 42.7-26.5 64-27.8 21.3-1.3 42.7 12.3 64 22.5 21.3 10.2 42.7 16.8 53.3 20.2l10.7 3.3v117H0z"
        ></StyledHills2>
        <StyledHills3
          $isDarkMode={theme === "dark"}
          d="M0 137.477l10.7-3.8c10.6-3.9 32-11.5 53.3-20.9 21.3-9.3 42.7-20.3 64-27.1 21.3-6.9 42.7-9.5 64-11.5 21.3-2 42.7-3.4 64-2.7 21.3.7 42.7 3.3 64 6.8 21.3 3.5 42.7 7.9 64 17.5 21.3 9.7 42.7 24.7 64 30.5 21.3 5.9 42.7 2.5 64-.1 21.3-2.7 42.7-4.7 64-14 21.3-9.4 42.7-26 64-28.7 21.3-2.7 42.7 8.7 64 15.2 21.3 6.5 42.7 8.1 64 13.8 21.3 5.7 42.7 15.3 64 16.5 21.3 1.2 42.7-6.2 64-8 21.3-1.8 42.7 1.8 53.3 3.7l10.7 1.8v104H0z"
        ></StyledHills3>
        <StyledHills5
          $isDarkMode={theme === "dark"}
          d="M0 156.477l10.7-8.5c10.6-8.5 32-25.5 53.3-30.3 21.3-4.9 42.7 2.5 64 8.8 21.3 6.3 42.7 11.7 64 15.8 21.3 4.2 42.7 7.2 64 4.5 21.3-2.6 42.7-11 64-19.3 21.3-8.3 42.7-16.7 64-16.2 21.3.5 42.7 9.9 64 11.5 21.3 1.7 42.7-4.3 64-3.6 21.3.6 42.7 8 64 16 21.3 8 42.7 16.6 64 18.3 21.3 1.7 42.7-3.7 64-12.5 21.3-8.8 42.7-21.2 64-26 21.3-4.8 42.7-2.2 64 2.3 21.3 4.5 42.7 10.9 64 7 21.3-3.8 42.7-17.8 53.3-24.8l10.7-7v138H0z"
        ></StyledHills5>
        <StyledHills6
          $isDarkMode={theme === "dark"}
          d="M0 187.477l10.7-.5c10.6-.5 32-1.5 53.3-1.5 21.3 0 42.7 1 64 .8 21.3-.1 42.7-1.5 64-3.3 21.3-1.8 42.7-4.2 64-10.7 21.3-6.5 42.7-17.1 64-19.6 21.3-2.5 42.7 3.1 64 3.1 21.3 0 42.7-5.6 64-7.3 21.3-1.7 42.7.7 64-.5 21.3-1.2 42.7-5.8 64-9.3 21.3-3.5 42.7-5.9 64 1 21.3 6.8 42.7 22.8 64 27.1 21.3 4.4 42.7-3 64-10.6 21.3-7.7 42.7-15.7 64-11.4 21.3 4.4 42.7 21 64 29.7 21.3 8.7 42.7 9.3 53.3 9.7l10.7.3v46H0z"
        ></StyledHills6>
        <StyledHills7
          $isDarkMode={theme === "dark"}
          d="M0 212.477l10.7-.8c10.6-.9 32-2.5 53.3-4.7 21.3-2.2 42.7-4.8 64-4.5 21.3.3 42.7 3.7 64 2.7 21.3-1 42.7-6.4 64-12.4 21.3-6 42.7-12.6 64-14.1 21.3-1.5 42.7 2.1 64 2 21.3-.2 42.7-4.2 64-3.9 21.3.4 42.7 5 64 5.9 21.3.8 42.7-2.2 64-.4 21.3 1.9 42.7 8.5 64 12.7 21.3 4.2 42.7 5.8 64 4 21.3-1.8 42.7-7.2 64-10.2 21.3-3 42.7-3.6 64-3.3 21.3.3 42.7 1.7 64 1.5 21.3-.2 42.7-1.8 53.3-2.7l10.7-.8v51H0z"
        ></StyledHills7>
      </Svg>
    </>
  )
}