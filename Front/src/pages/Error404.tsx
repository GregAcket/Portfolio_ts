import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { ThemeProps } from "../utils/type"
import { ThemeContext } from "../utils/ThemeProvider"
import { useContext } from "react"

const ErrorSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NotFound = styled.p`
  font-weight: 700;
  font-size: 96px;
  margin-top: 195px;

  @media (min-width: 768px) {
    font-size: 288px;
    margin-top: 169px;
  }
`

const Oups = styled.p`
  margin-top: 11px;
  margin-bottom: 133px;
  font-size: 17px;

  @media (min-width: 768px) {
    margin-top: 66px;
    margin-bottom: 100px;
    font-size: 36px;
  }
`

const ErrorLink = styled(Link)<ThemeProps>`
  text-decoration-line: underline;
  margin-bottom: 50px;
  font-size: 14px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export default function Error() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <ErrorSection>
        <NotFound>404</NotFound>
        <Oups>La page que vous cherchez n'existe pas</Oups>
        <ErrorLink to={"/"} $isDarkMode={theme === "dark"}>
          Retour à la page d'accueil
        </ErrorLink>
      </ErrorSection>
    </>
  )
}
