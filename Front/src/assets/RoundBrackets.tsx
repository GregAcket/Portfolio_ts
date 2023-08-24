import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

const Svg = styled.svg`
  position: absolute;
  bottom: -3050px;
  right: 20px;
  width: 65px;
  height: 65px;
  transform: rotate(-45deg);

  @media (min-width: 768px) {
    bottom: -1850px;
    right: 180px;
  }

  @media (min-width: 992px) {
    bottom: -1620px;
    right: 180px;
  }
`

export default function RoundBrackets() {
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
        d="M55.01 62.67C46.336 74.93 36 96.218 36 128s10.337 53.07 19.01 65.33c9.408 13.302 18.961 19.188 19.056 19.245a4 4 0 01-4.124 6.855C68.229 218.402 28 193.512 28 128s40.23-90.402 41.942-91.43a4 4 0 014.124 6.855c-.095.057-9.648 5.943-19.057 19.246zm131.048-26.1a4 4 0 00-4.124 6.855c.095.057 9.648 5.943 19.057 19.246C209.663 74.93 220 96.217 220 128s-10.337 53.07-19.01 65.33c-9.408 13.302-18.961 19.188-19.048 19.24a4 4 0 104.116 6.86C187.771 218.402 228 193.512 228 128s-40.23-90.402-41.942-91.43z"
      ></Path>
    </Svg>
  )
}
