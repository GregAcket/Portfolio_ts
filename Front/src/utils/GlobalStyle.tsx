import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"
import { createGlobalStyle } from "styled-components"
import { ThemeProps } from "./type"

const StyledGlobalStyle = createGlobalStyle<ThemeProps>`

* {
  box-sizing: border-box;

}

html{
  scroll-behavior:smooth;
}

body {
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  margin:0;
}

#root {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h1,
h2,
p,
ul {
  margin: 0px;
}

button,
ul {
  padding: 0px;
}
`

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle $isDarkMode={theme === "dark"} />
}
