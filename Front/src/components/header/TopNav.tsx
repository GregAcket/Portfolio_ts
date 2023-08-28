import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { ThemeContext } from "../../utils/ThemeProvider"
import { useContext } from "react"
import { ThemeProps } from "../../utils/type"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 45px;
  padding: 0px 15px;

  @media (min-width: 768px) {
    margin-top: 95px;
  }
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 570px) {
    flex-direction: row;
    align-items: center;
  }
`

const Li = styled.li<ThemeProps>`
  cursor: pointer;
  list-style: none;
  border-bottom: 1px solid transparent;
  transition: all 400ms;

  &:hover {
    border-bottom: 1px solid green;
    text-shadow: ${({ $isDarkMode }) =>
      $isDarkMode
        ? "0px 0px 3px rgba(195, 191, 39, 0.8)"
        : "0px 0px 3px rgba(60, 64, 67, 0.8)"};
  }

  a {
    text-decoration: none;
    color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
    @media (min-width: 768px) {
      font-size: 22px;
    }
  }
`

export default function TopNav() {
  // CTXT

  const { theme } = useContext(ThemeContext)

  // LOGIC

  // Navigation

  const Links = [
    {
      name: "Projets",
      path: "#projects",
    },
    {
      name: "À propos",
      path: "#a_propos",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ]

  const Navigation = Links.map((link) => {
    const mappedLinks = (
      <Li key={link.name} $isDarkMode={theme === "dark"}>
        <Link reloadDocument to={link.path}>
          {link.name}
        </Link>
      </Li>
    )
    return mappedLinks
  })

  return (
    <>
      <Nav>
        <Ul>{Navigation}</Ul>
      </Nav>
    </>
  )
}
