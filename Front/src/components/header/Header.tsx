import { Link } from "react-router-dom"
import { styled } from "styled-components"
import LogoDev from "./logodev"
import ThemeSwitcher from "../ThemeSwitcher"
import { ThemeContext } from "../../utils/ThemeProvider"
import { useContext } from "react"
import { ThemeProps } from "../../utils/type"
import { StateProjectsContext } from "../../utils/StateProjectsProvider"
import { StateSingleProjectsContext } from "../../utils/StateSingleProjectProvider"

const MainHeader = styled.header`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  width: 100%;
  padding: 30px 15px 0px;
`

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BrandName = styled.p<ThemeProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 35px;
    font-weight: 600;
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 45px;

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

export default function Header() {
  // CTXT

  const { theme } = useContext(ThemeContext)
  const { isProjectsWrapperHidden, changeProjectsWrapper } =
    useContext(StateProjectsContext)

  const { changeMasterWrapper } = useContext(StateSingleProjectsContext)

  // LOGIC

  // If a single project is open, on clic on the logo it'll reset properly opacity on main page
  const reset = () => {
    if (isProjectsWrapperHidden === true) {
      changeProjectsWrapper()
      changeMasterWrapper()
    }
  }

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
      <MainHeader>
        <TopDiv>
          <Link
            to={"/"}
            onClick={() => reset()}
            aria-label="Logo du site retour à la page d'accueil"
          >
            <LogoDev />
          </Link>
          <BrandName $isDarkMode={theme === "dark"}>Greg_Dev</BrandName>
          <ThemeSwitcher />
        </TopDiv>
        <Nav>
          <Ul>{Navigation}</Ul>
        </Nav>
      </MainHeader>
    </>
  )
}
